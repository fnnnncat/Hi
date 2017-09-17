import React from 'react'
import {
  connect,
} from 'react-redux'
import logo from './logo.svg'
import './index.css'
import {
  pushCount,
} from '../../actions/global'
import {
  getTest,
} from '../../request/global'

class Home extends React.Component {
  async componentDidMount() {
    const k = await getTest()

    console.log(k)
  }

  render() {
    const count = this.props.global.count

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => pushCount(count+1)}>click times: {count}</button>
      </div>
    )
  }
}

export default connect(state => ({
  global: state.global,
}))(Home)
