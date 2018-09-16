var React = require('react')
var ReactDOMServer = require('react-dom/server')
var {
    match,
    RouterContext
} = require('react-router')
var path = require('path')
var fs = require('fs')

// FIXME:
var baseTemplate = fs.readFileSync(path.resolve(__dirname, './public/index.server.html'))
var routes = require('./src/routes')

module.exports = async function (ctx, next) {
    await new Promise((resolve, reject) => {
        match({
            routes: routes,
            location: req.url
        }, (error, redirect, renderProps) => {
            resolve()
            console.log(error, redirectLocation, renderProps)
            if (error) {
                ctx.status = 500
                ctx.body = error.message
            } else if (redirectLocation) {
                ctx.status = 302
                ctx.redirect(redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                ctx.status = 200
                ctx.body = ReactDOMServer.renderToString(React.createElement(RouterContext,renderProps))
            } else {
                ctx.status = 404
            }
        })
    })
}