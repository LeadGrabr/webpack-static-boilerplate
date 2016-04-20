const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const routes = [
    '/',
    '/about/',
    '/contact/',
    '/gallery/'
]

module.exports = {

    devtool: 'source-map',

    entry: {
        main: path.resolve('./src/index.js')
    },

    output: {
        filename: 'package.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                //this tests for these specific node modules which are not transpiled already
                //and transpiles them for us
                test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
                loader: 'babel'
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }
        ]
    },

    resolve: {
        root: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        modulesDirectories: [
            'src',
            'src/components',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx', '.json']
    },

    node: {
        net : 'empty',
        tls : 'empty',
        crypto: 'empty',
        dns : 'empty'
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new StaticSiteGeneratorPlugin('main', routes),
        new webpack.NormalModuleReplacementPlugin(/^(net|dns|crypto)$/, function(){ return {} }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                "API_ENDPOINT": JSON.stringify(process.env.API_ENDPOINT),
                "AUDIENCE": JSON.stringify(process.env.AUDIENCE),
                "DEVELOPMENT": true,
                "DEVTOOLS": true,
                "GOOGLE_MAPS_APIKEY": JSON.stringify(process.env.GOOGLE_MAPS_APIKEY)
            }
        }),
    ],

    eslint: {
        configFile: __dirname + '/.eslintrc'
    }
}
