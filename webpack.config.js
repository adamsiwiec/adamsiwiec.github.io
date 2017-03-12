var path = require("path");
var webpack = require("webpack");
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
var SRC = path.join(__dirname, 'src/');

module.exports = {
    entry: SRC,
    output: {
        publicPath: "dist/",
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']

        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },

    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, '*.html')),
        })
    ]
};
