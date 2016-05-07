#Simple Static React Router

This repo is minimal boilerplate for static react & es6 site with a basic router. If you don't need a router, check out Simple Static React.

The intention is to provide a basic boilerplate setup that doesnt inundate the new user with complexity, and stays out of the way of the more comfortable who just want an ES6/React environment to bang out an idea.

It is also intended to get you up and developing a React app with a minimum of fuss and configuration for your Firebase, Github, or plain old web server, or as the front-end for the Wordpress API.

You get:
- ES6/React (with sourcemaps)
- CSS modules
- hash based, client side routing
- watchfile'd development builds

That's it.

##Set up

Clone the repo locally and run npm install.

```
git clone https://github.com/Jon-Biz/simple-static-react
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

The architectures is as follows:

`/src/index.js`
  * loads route.js and hands it the contents of data.js, along with route hash. If the route hash changes, it triggers a rerenders with the new hash.

`/src/router.js`
  * delivers routes based on the passed in hash prop.
  * dynamically checks the data passed in, and matches any events

`/src/containers`

  * contains the route containers

`/src/containers/helloWorld.js`
  * Hello World page

`/src/containers/helloAgainWorld.js`
  * Hello Again, World page

`/src/containers/helloWorld.css`
`/src/containers/helloAgainWorld.css`
  * css stylesheets

`/pubic/`
  * output directory. Put your assets in here next to the compiled js and css.
