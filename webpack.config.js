const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const routes = ['/']

module.exports = {

    devtool: 'source-map',

    entry: {
        main: __dirname + '/src/index.js'
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
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
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
        moduleDirectories: [
            __dirname + '/src',
            __dirname + '/node_modules'
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
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                "API_ENDPOINT": JSON.stringify(process.env.API_ENDPOINT),
                "DEVELOPMENT": true,
                "DEVTOOLS": true
            }
        }),
    ],

    eslint: {
        configFile: __dirname + '/.eslintrc'
    }
}
