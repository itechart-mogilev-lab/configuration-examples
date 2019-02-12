var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",

    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  // Add the JSHint loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin({})
  ]
};
