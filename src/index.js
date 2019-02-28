import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import {
    browserHistory,
    Router
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import './index.css'
// import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import configureStore from './redux'
import './index.css'

var store = configureStore(window.__INITIAL_STATE__ || {})
ReactDOM.render(
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)} routes={routes} />
    </Provider>,
    document.getElementById('root')
)

// FIXME: 
// registerServiceWorker()