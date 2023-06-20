const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    //   mode: 'development',
    mode: 'production',
    output: {
        // clean: true,
        publicPath: '/',
        // publicPath: 'https://ai-deliver-bucket.bj.bcebos.com/ai-deliver/ai-deliver/',
        filename: '[name].js',
        // chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'testaa',
        libraryTarget: 'umd',
        globalObject: 'this',
        // library: {
        //   name: 'testaa',
        //   type: 'umd',
        // },
    },
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        // filename: '[name].js',
                        inline: 'fallback',
                        // fallback: false
                        // esModule: false,
                        // publicPath: '/',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            //   template: './index.html',
            template: path.resolve(__dirname, 'index.html'),
            title: 'index',
            filename: 'index.html',
        }),
    ],
};
