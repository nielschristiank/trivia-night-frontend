import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, SvgIcon } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import grey from "@material-ui/core/colors/grey";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton'


const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    color: grey[50]
  },
  appbar: {
    backgroundColor: grey[900]
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#fafafa' },
  },
});

function HomeIcon(props) {
  return (
    <IconButton component={Link} to='/'>
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </IconButton>
  );
}

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    console.log(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = (e) => {
    console.log(e.target.name);
    if(e.target.name === 'x')
    window.location.href = '/game'
  }



  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className = {classes.appbar} position="static">
          <Toolbar>
            <Typography color="inherit" style={{ flex: 1 }}>
              <h2 style={{letterSpacing:'5px'}}> TRIVIA NIGHT! </h2>
            </Typography>
            <Button variant="h6" color="inherit" component={Link} to="/selectgame">
              Play a Game
            </Button>
            <HomeIcon className={classes.icon}/>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  marginRight="100em"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MuiThemeProvider theme={theme}>
                    <MenuItem component={Link} to="/dashboard">
                      <Button size= "large" variant="contained" color="primary">
                        Profile
                      </Button>
                    </MenuItem>
                    <MenuItem history={this.props.history}>
                      <Button component={LoginButton}></Button>
                    </MenuItem>
                  </MuiThemeProvider>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(Header);
