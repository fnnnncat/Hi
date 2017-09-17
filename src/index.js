import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider,
} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import './index.css'
// import serviceWorker from './serviceWorker'
import store from './store'

class Bundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: null,
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadComponent !== this.props.loadComponent) {
      this.load(nextProps)
    }
  }

  async load(nextProps) {
    this.setState({
      mod: null,
    })

    const component = await nextProps.loadComponent()

    this.setState({
      mod: component.default ? component.default : component,
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

const Home = props => (
  <Bundle loadComponent={() => import('./views/Home')}>
    {Home => <Home {...props} />}
  </Bundle>
)
const About = props => (
  <Bundle loadComponent={() => import('./views/About')}>
    {About => <About {...props} />}
  </Bundle>
)

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
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
// serviceWorker()
