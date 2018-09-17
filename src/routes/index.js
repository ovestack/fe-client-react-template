import App from '../pages'
import hook from './hook'

var routes = []

var buildMap = function(rules, routes, isSub) {
    for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
            var rule = rules[i]
            var ret = {
                path: isSub ? i.replace('/', '') : i,
                name: rule.name
            }
            if (i === '/') {
                ret.component = App
            } else {
                ret.getComponent = rule.file && (function(rule) {
                    return function(nextState, callback) {
                        require.ensure([], require => {
                            callback(null, require(`../pages${rule.file}`).default)
                        })
                    }
                })(rule)  
            }
            if (rule.subRoutes) {
                ret.childRoutes = []
                buildMap(rule.subRoutes, ret.childRoutes, true)
            }
            hook(ret, rules, i)
            routes.push(ret)
        }
    }
}

buildMap(__ROUTER_MAP__, routes)

export default routes
