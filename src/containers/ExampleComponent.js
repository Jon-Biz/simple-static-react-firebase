import React, {Component} from 'react'
const firebase = window.firebase

class HelloWorld extends Component {
  componentWillMount() {
    const fbref = this.props.data.getRef({fbref:'', parentRef:this.props.fbref})
    this.cancelListener = this.props.data.setListener({ref:fbref, callback:(data) => this.setState({data})})
    this.setState({fbref})
  }

  componentWillUnmount() { if (this.cancelListener) this.cancelListener() }

  render() {
    return (
      <div>
        <p>Here is some data in a subcomponent:</p>
        <p>
          {
            JSON.stringify(this.state.data, '/n')
          }
        </p>
      </div>
    )
  }
}

export default HelloWorld