#Simple Static React

This repo is minimal boilerplate for static react & es6 site.

It is intended for to get you up and developing with a minimum of fuss and configuration for your Firebase, Github, or plain old web server, or as the front-end for the Wordpress API.

This version doesn't have have a router - it just drops you straight into the page. If a simple, hash-based router would get you further along, use
https://github.com/Jon-Biz/simple-static-react-router .

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