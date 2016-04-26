const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  , './src/style.css'
    ]

, output: {
    filename: 'index.js'
  , chunkFilename: "[id].js"
  , path: __dirname + '/public/'
  , libraryTarget: 'umd'
  }

, module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    , { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    , { test: /\.css$/, exclude: /node_modeuls/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
    ]
  }

, plugins: [
    new ExtractTextPlugin("style.css", {allChunks: true})
  ]

, devtool: "#source-map"
}
