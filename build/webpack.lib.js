const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "production",
    entry: path.resolve('./src/components/index.js'),
    output: {
        path: path.resolve(__dirname,  '../dist'),
        filename: 'wayswipe.js',
        libraryTarget: 'umd',
        library:'wayswipe',
        umdNamedDefine: true
    },
    externals: 'vue',
    module: {
        rules:  [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};
