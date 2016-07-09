import React from 'react'
const firebase = window.firebase

const HelloWorld = (props) => {
  const signOut = () => firebase.auth().signOut()
  return (
    <div>
      <h1>Hello World</h1>
      <p>Here is some data:</p>
      <p>
        {
          JSON.stringify(props.user, '/n')
        }
      </p>
      <p>
      <a href="auth.html">
        Go to the auth page.
      </a>
      <span onClick={signOut}>
        Sign out
      </span>
        <i>
          When you are publishing your site, don't forget to run 'npm run build' before uploading you public directory to your website.
        </i>
      </p>
    </div>
  )
}

export default HelloWorld