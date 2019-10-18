var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "bundle": './src/main.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      cache: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "./build"),
    compress: true,
    port: 3009,
    hot: true
  }
}