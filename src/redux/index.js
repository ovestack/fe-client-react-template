import {
    createStore,
    applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {
    combineReducers
} from 'redux'
import {
    routerReducer
} from 'react-router-redux'

const middleware = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger())
}

// __INITIAL_STATE__
export default function configureStore(initialState) {
    const store = createStore(
        combineReducers.apply(combineReducers, [Object.assign({
            routing: routerReducer
        })].concat(getReducers())),
        initialState,
        applyMiddleware.apply(null,middleware)
    )

    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

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
    console.log(modules)
    return modules
}

function Camelize(prop){
    prop = prop.replace('./', '').replace('/index.js', '')
	return prop.replace(/\/([a-z])/ig,function(all,letter){
        return letter.toUpperCase()
    })
}