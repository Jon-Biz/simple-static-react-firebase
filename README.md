#Simple Static React

This repo is minimal boilerplate for static react & es6 site.

The intention is to provide a basic boilerplate setup that doesnt inundate the new user with complexity, and stays out of the way of the more comfortable who just want an ES6/React environment to bang out an idea. It's ready to set up on your plain old web server, or your Firebase or Github site, or for building the front-end for your Wordpress API, with a minimum of fuss and configuration.

This version doesn't have have a router - it just drops you straight into the page. If a simple, hash-based router would get you further along, use
https://github.com/Jon-Biz/simple-static-react-router . What you do get:

- ES6/React (with sourcemaps)
- CSS modules
- watchfile'd development builds

That's it.

##Set up

Clone the repo and install the node dependencies.

```
git clone https://github.com/Jon-Biz/simple-static-react
cd simple-static-react
npm i
```

##Usage

###Development

Run the npm script `dev` to develop.

```
npm run dev
```

A webpack server will now be running on `4000`, serving the contents of the `public` directory. The `entry` files are in `src` - `index.js` and `style.css`.

NOTE: this is using webpack-dev-server, not actually overwriting the files in `public`. For that, you will need to run the build script.

###Production

Run the npm script 'build' to update `style.css` and `index.js` in the `public` directory. Upload this directory to your web server.

```
npm run build
```
