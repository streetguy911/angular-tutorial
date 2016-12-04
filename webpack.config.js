'use strict';

var webpack = require('webpack');

module.exports = {

    entry: "./app/app.js",
    output: {
        path: __dirname + '/public/javascripts/',
        filename: "common.js"
    },

    devtool: "eval",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
              test: /\.html$/,
              // loader: "raw",
              loader: "angular-templatecache-loader",
              exclude: /node_modules|bower_components/
          },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }

};
