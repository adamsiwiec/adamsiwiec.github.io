var path = require("path");
var webpack = require("webpack");

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
            loaders: ['style', 'css']
        }, {
            test: /\.(jpg|png)$/,
            loader: 'file',
            query: {
                name: 'img/[name].[ext]'
            }

        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        //new webpack.optimize.UglifyJsPlugin({
    //compress: {
    //    warnings: false
    //}
//})
    ]
};
