var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/views/main.js'
    ],
    output: {
        path: './app/build',
        publicPath: "/assets/",
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'jsx?harmony'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
               //loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer!less-loader"),
                loader: 'style!css!autoprefixer!less',
                exclude: /node_modules/
            },
            {
                test: /\.(svg|eot|ttf|woff)/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/views/app.html'
        }),
        new ExtractTextPlugin("app.css")
    ]
};