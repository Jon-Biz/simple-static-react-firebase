import React from 'react'

const HelloAgainWorld = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Here is some other data:</p>
      <p>
        {
          props.helloAgainWorldData
        }
      </p>
      <a href="#">
        Back to the other page.
      </a>
    </div>
  )
}

export default HelloAgainWorld