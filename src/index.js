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
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from 'material-ui'
import {
  Menu as MenuIcon,
} from 'material-ui-icons'

import './styles/base.css'
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
          <div className="app-root">
            {this.renderDevTools()}
            <AppBar position="static">
              <Toolbar>
                <IconButton className="menu-button" color="contrast" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" className="flex">
                  Title
                </Typography>
                <Button color="contrast">
                  <Link to="/">Home</Link>
                </Button>
                <Button color="contrast">
                  <Link to="/about">About</Link>
                </Button>
              </Toolbar>
            </AppBar>
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
