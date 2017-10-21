const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(__dirname, "src", "index.js")],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }, 
      { 
        test: /\.js$/, 
        use: 'babel-loader', 
        exclude: /node_modules/ 
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.resolve(__dirname, "src", "index.tmpl.html"),
    }),
    new ExtractTextPlugin("styles.css"),
  ],
};