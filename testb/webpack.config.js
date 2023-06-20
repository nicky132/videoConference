const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  // mode: 'production',
  output: {
    clean: true,
    // publicPath: '/',
    filename: '[name].js',
    // chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // library: {
    //   name: 'testbb',
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
              filename: '[name].[contenthash].js',
            },
          },
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'index',
      filename: 'index.html',
    }),
  ],
};
