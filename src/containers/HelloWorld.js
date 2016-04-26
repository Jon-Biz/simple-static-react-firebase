import React from 'react'

const HelloWorld = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Here is some data:</p>
      <p>
        {
          props.helloWorldData
        }
      </p>
      <a href="#hello-again-world">
        Go to the other page.
      </a>
      <p>
        <i>
          When you are publishing your site, don't forget to run 'npm run build' before uploading you public directory to your website.
        </i>
      </p>
    </div>
  )
}

export default HelloWorld