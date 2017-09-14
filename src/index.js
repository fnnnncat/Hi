import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/Home'
import serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker()
