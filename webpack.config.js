const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: "development", // "production" | "development" | "none"
  devtool: "inline-source-map",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          tsConfigFile: 'tsconfig.json'
        }
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }, {
        test: /\.ttf$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new CopyWebPackPlugin({
      patterns: [{
        from: 'public',
        globOptions: {
          ignore: [
            '**/index.html'
          ]
        }
      }]
    }),
    new webpack.EnvironmentPlugin({
      VERSION: require('./package.json').version
      // 'process.env.VERSION': JSON.stringify(require('../package.json').version)
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8000,
    historyApiFallback: true
  }
};