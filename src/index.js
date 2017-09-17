import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider,
} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css'
import Home from './views/Home'
import About from './views/About'
import serviceWorker from './serviceWorker'
import store from './store'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      env: process.env.NODE_ENV,
    }
  }
  renderDevTools() {
    const DevTools = require('./views/DevTools').default

    return this.state.env === 'development' ? <DevTools /> : null
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {this.renderDevTools()}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker()
