import React, { Component } from 'react'
import AuthService from '../services'

class RegisterPage extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			errors: "",
			form: {
				user: {
					username: "",
					email: "",
					password: ""
				}
			}
		}
	}

	render() {
		let { username, email, password } = this.state.form.user
		return (
			<main>
				<h2>Welcome! Register here.</h2>
				<form onSubmit={this.onSubmit}>
					<input
            placeholder="User Name"
						type="text"
						name="username"
						value={username}
						onChange={this.onChange}
						required
					/>
					<input
            placeholder="Email"
						type="email"
						name="email"
						value={email}
						onChange={this.onChange}
						required
					/>
					{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
					<input
            placeholder="Password"
						type="password"
						name="password"
						value={password}
						onChange={this.onChange}
						required
					/>
					{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
					<button onSubmit={this.onSubmit}>Register</button>
				</form>
			</main>
		)
	}

	onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()
		let { username, email, password } = this.state.form

		this.auth.register(this.state.form)
		this.auth.login(email, password)
		.then(json => {
			console.log("handling any errors");
			this.props.history.replace('/selectgame')
			if(json.errors) {
				this.setState({
					errors: json.errors
				})
			}
			return json
		})
	}
}

export default RegisterPage
