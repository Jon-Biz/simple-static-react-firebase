import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

require('./style.css')

class HelloWorld extends Component{

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

const content = document.getElementById('app')

ReactDom.render(<HelloWorld />, content)
