import React, {Component} from 'react'
const firebase = window.firebase

import ExampleComponent from './ExampleComponent'

class HelloWorld extends Component {
  componentWillMount() {
    const fbref = this.props.data.getRef({fbref:''})
    this.setState({fbref})
  }

  componentWillUnmount() { if (this.cancelListener) this.cancelListener() }

  render() {
    const signOut = () => firebase.auth().signOut()
    const data = this.props.data
    const fbref = this.state.fbref
    return (
      <div>
        <h1>Hello World</h1>
        <ExampleComponent fbref={fbref} data={data}/>
        <p>
          User Name:
          { this.props.user.displayName }
        </p>

        <p>
          <a href="auth.html">
            Go to the auth page.
          </a>
          <br />
          <button onClick={signOut}>
            Sign out
          </button>
          <br />
          <i>
            When you are publishing your site, don't forget to run 'npm run build' before uploading you public directory to your website.
          </i>
        </p>
      </div>
    )
  }
}

export default HelloWorld