const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src', 'app-client.js'), path.join(__dirname, 'src', 'scss', 'main.scss')],
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: 'babel_cache',
            presets: ['react', 'es2015']
          }
        }
      },
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/[name].bundle.css',
      allChunks: true,
    })
  ]
};