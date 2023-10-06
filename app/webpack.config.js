const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: './dist',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 App',
        }),
    ],
};
