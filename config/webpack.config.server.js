var fs = require('fs')
var path = require('path')
var paths = require('./paths')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: path.resolve(__dirname, '../src/index.server.js'),

    output: {
        path: path.resolve(__dirname, '../../sso-client/services/ssr/dist'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },

    target: 'node',

    // keep node_module paths out of the bundle
    externals: fs
        .readdirSync(path.resolve(__dirname, '../node_modules'))
        .concat(['react-dom/server', 'react/addons'])
        .reduce(function(ext, mod) {
            ext[mod] = 'commonjs ' + mod
            return ext
        }, {}),

    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader?presets[]=react'
                }, {
                    loader: path.join(__dirname, '../scripts/router.js')
                }]
            },
            {
                test: /\.(css|less)$/,
                loader: 'null-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 5000
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 50
                }
            }
        ]
    }
}