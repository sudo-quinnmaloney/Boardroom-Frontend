/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server', './src/client.js'],
    output: {
        path: __dirname + '/dist/',
        publicPath: "/",
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()],
};
