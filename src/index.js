import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'
const firebase = window.firebase

import Data from './data.js'
import Router from './router.js'

const LoggedOut = () => {
  const signOut = () => firebase.auth().signOut()

  return (
    <div>
      <h1>Hello World</h1>
      <a href="auth.html">
        Go to the auth page.
      </a>
      
      <div onClick={signOut}>
          Sign out
        </div>


    </div>
  )
}

const onRouteChange = (user) => {
  // Splits location into `/` separated parts,
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  // Gets the DOM Element to render to
  const content = document.getElementById('app')
  // Renders with the location and the data
  if (user) ReactDom.render(<Router data={data} user={user} location={location}/>, content)
  else ReactDom.render(<LoggedOut />, content)
}

const data = new Data(onRouteChange)
window.addEventListener('hashchange', onRouteChange, false);

onRouteChange()
