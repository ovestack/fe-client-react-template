import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import {
    browserHistory,
    Router
} from 'react-router'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()