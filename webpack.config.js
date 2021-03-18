const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const themeVars = lessToJs(fs.readFileSync(
    path.join(__dirname, 'src', 'assets', 'less', 'antd.less'),
    'utf8',
));

const isProduction = process.env.NODE_ENV === 'production' || false;

module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'index.js'),
    },
    output: {
        filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
    optimization: {
        chunkIds: 'named',
        runtimeChunk: {
            name: entrypoint => `runtime_${entrypoint.name}`,
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [[
                        'import', {
                            libraryName: 'antd',
                            style: true,
                        },
                    ]],
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(gif|otf|eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {
                        modifyVars: themeVars,
                        javascriptEnabled: true,
                    },
                }],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            inject: 'html',
            template: path.join(__dirname, 'src', 'index.html'),
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};