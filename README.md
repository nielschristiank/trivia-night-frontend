Front End Trivia App for React

If you do not have [Homebrew](https://brew.sh/) installed
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Then if you do not have yarn installed run:
`brew install yarn`
If you use [nvm](https://github.com/creationix/nvm) or similar, you should exclude installing Node.js so that nvm’s version of Node.js is used.
`brew install yarn --without-node`

git clone then run:
`yarn install` to install all dependencies

to start the app in a browser run:
`yarn start`

Now you will need the back end Ruby API to be fully functional
[trivia back end](https://github.com/nielschristiank/trivia-night-backend)
