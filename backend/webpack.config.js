const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const DIR = path.resolve(__dirname);

const browserConfig = {
    entry: './src/index.js',
    output: {
        path: path.join(DIR, "dist"),
        filename: 'assets/js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin([{ from: "./assets", to: "assets" }]),
        new Dotenv({
            path: './.env',
            save: true
        })
    ],
    devServer: {
        writeToDisk: false,
        compress: true,
        // host: '192.168.0.134',
        port: 3501,
        historyApiFallback: true, // resolves error while refresh or access directly
        // from browser. Error GET /someroot
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:3500",
        //         secure: false,
        //         changeOrigin: true,
        //         logLevel: "debug"
        //     }
        // }
    }

};

module.exports = [browserConfig];