import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

import data from './data.js'

import Router from './router.js'

<<<<<<< HEAD
/*
  Call this function every time the data payload changes.

  Or, if your site is truly static, just pass in the data you want to display.
  Or, if you don't need to render data, ask yourself why you are using a framework,
    and then delete the import statment above and the reference to it in the react
    component render below.
*/
function onDataChange() {
  // Splits location into `/` separated parts,
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  // Gets the DOM Element to render to
  const content = document.getElementById('app')
  // Renders with the location and the data
  ReactDom.render(<Router {...data} location={location}/>, content)
=======
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
        Don't forget to:
        <ul>
          <li>
            Run 'npm run build' before uploading you public directory to your website.
          </li>
        </ul>
      </div>
    )
  }
>>>>>>> b98fa99... create README and update welcome reminder
}

window.addEventListener('hashchange', onDataChange, false);

onDataChange()
