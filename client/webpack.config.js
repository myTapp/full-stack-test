var path = require('path');
var webpack = require('webpack');
require("dotenv").config();
const version = new Date().getTime();

const getEnvironmentVariableToSetConstants = () => {
    let constantes = {};
    Object.keys(process.env).forEach(key => {
        if (key.toString().startsWith("APP")) {
            constantes[key] = JSON.stringify(process.env[key]);
        }
    });

    return constantes;
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?url=false'
                ]
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            CONSTANTS: getEnvironmentVariableToSetConstants()
        })
    ],
};