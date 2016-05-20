var NpmInstallPlugin = require('npm-install-webpack-plugin');

const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    entry:   [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './assets/js/index'
    ],
    output:  {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new NpmInstallPlugin()
    ],

    module: {
        preLoaders: [ //добавили ESlint в preloaders
            {
                test:    /\.js$/,
                loaders: [ 'eslint' ],
                include: [
                    path.resolve(__dirname, '../../assets/js')
                ]
            }
        ],
        loaders:    [ {
            loaders: [ 'react-hot', 'babel-loader' ],
            test:    /\.js$/,
            include: path.join(__dirname, '../../assets/js'),
            exclude: /node_modules/,
            plugins: [ 'transform-runtime' ]
        } ]
    }
};
