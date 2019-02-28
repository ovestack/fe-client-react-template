import {
    createStore,
    applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
    createLogger
} from 'redux-logger'
import {
    combineReducers
} from 'redux'
import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux'
import {
    browserHistory
} from 'react-router'

const middleware = [thunkMiddleware, routerMiddleware(browserHistory)]

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger())
}

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers(Object.assign({
            routing: routerReducer
        }, ...getReducers())),
        initialState,
        applyMiddleware.apply(null, middleware)
    )

    // FIXME: add hot module reload for redux
    // if(module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').default
    //         store.replaceReducer(nextRootReducer)
    //     })
    // }

    return store
}

function getReducers() {
    var resolvers = require.context('./', true, /\/index\.js$/)
    var modules = []
    resolvers.keys().forEach(function(r) {
        if (r === './index.js') return
        var mod = resolvers(r)
        if (resolvers(r).default) {
            mod = resolvers(r).default
        }
        modules.push(mod)
    })
    return modules
}