#Simple Static React Firebase

This repo is minimal boilerplate for static react & es6 site with firebase authentication and cloud database, and a router. If you don't need all that, check out Simple Static React - https://github.com/jon-biz/simple-static-react

The intention is to provide a basic boilerplate setup that doesnt inundate the new user with complexity, and stays out of the way of the more comfortable who just want an ES6/React environment with persistent user data, to bang out an idea.

You get:
- ES6/React (with sourcemaps)
- CSS modules
- Google/Facebook/Twitter/Github/Email user login
- Firebase database
- hash based, client side routing
- watchfile'd development builds

That's it.

Now, this isn't as simple as I'd like, but federated authentication and wiring up a realtime db isn't either. Additionally, Firebase's authentication system requires a static page and doesn't play nicely with single page apps. So, we redirect back and forth to  `auth.html` during login.

## CRUD

This fork includes a CRUD branch which adds a simple example of database CRUD methods.


##Set up

Clone the repo locally and run npm install.

```
git clone https://github.com/Jon-Biz/simple-static-react-firebase
cd simple-static-react-firebase
npm i
```

Add your firebase project info to the head of both `public/auth.html` and `src/data.js`, replacing this code:

```
const config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};
```

Configure whichever login providers you want to use, and remove the remaining references in `public/auth.html`:

```
  // Leave the lines as is for the providers you want to offer your users.
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  firebase.auth.GithubAuthProvider.PROVIDER_ID,
  firebase.auth.EmailAuthProvider.PROVIDER_ID
```

You're done. Time to begin _the real_ work on your amazing idea!

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

###Wiring up firebase components

The data module has two endpoints for wiring up components. One, `setupListener` takes an url string and callback, and returns a cancel callback. It sets up a listener to your firebase db.

The other, `getRef`, is a convenience method that takes a reference string and the component's parents reference string (handed down via props), and returns a concatenated version. If you don't pass it a parent, it concatenates the root node for your firebase app. This is created after login and can, as it does in this example, include the user's id in the ref.

```
    const fbref = this.props.data.getRef({fbref:'ROOT_DATA_NODE_FOR_THIS_APP'})
    this.setState({fbref})

    ...

    <ExampleComponent fbref={this.state.fbref} data={this.props.data}/>

```

This makes wiring up a components as simple as setting up a listener and tear down as simple as:
```
  componentWillMount() {
    const fbref = this.props.data.getRef({fbref:'THIS_COMPONENTS_FIREBASE_REF', parentRef:this.props.fbref})
    this.cancelListener = this.props.data.setListener({ref:fbref, callback:(data) => this.setState({data})})
    this.setState({fbref})
  }

  componentWillUnmount() { if (this.cancelListener) this.cancelListener() }
```

### Architecture

The architecture is as follows:

`/src/index.js`
  * loads route.js and hands it the contents of data.js, along with route hash. If the route hash changes, it triggers a rerenders with the new hash.

`/src/router.js`
  * delivers routes based on the passed in hash prop.
  * dynamically checks the data passed in, and matches any events

`/src/data.js`
  * listens for login changes and serves up data

_Note: As is, this uses a traditional 'top down' React style data management - ie - passing down state via props from the top, rather than passing down Firebase database references.

`/src/containers`

  * contains the route containers

`/src/containers/HelloWorld.js`
  * Hello World page

`/src/containers/HelloAgainWorld.js`
  * Hello Again, World page

`/src/containers/helloWorld.css`
`/src/containers/helloAgainWorld.css`
  * css stylesheets

`/public/`
  * output directory. Put your assets in here next to the compiled js and css.
