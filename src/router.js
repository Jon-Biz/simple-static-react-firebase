import React, {Component} from 'react'

import Helloworld from './containers/helloworld.js'
import HelloAgainworld from './containers/helloAgainWorld.js'

class Router extends Component {
  render() {
    const hash = this.props.location[0]
// Put your routes in this switch statement.
    switch (hash)  {
      case '':
        return <Helloworld {...this.props} />;
      case 'hello-again-world':
        return <HelloAgainworld {...this.props} />;
      default:
        return (
          <div>
            Page Not Found
          </div>
        );
    }
  }
}

export default Router