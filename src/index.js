import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

import data from './data.js'

import Router from './router.js'

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
}

window.addEventListener('hashchange', onDataChange, false);

onDataChange()
