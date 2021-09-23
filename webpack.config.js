const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production' || false

module.exports = {
  entry: [
    './src/index.js'
  , './src/style.css'
    ]
, mode: devMode ? 'development' : 'production'
, output: {
    filename: 'index.js'
  , chunkFilename: "[id].js"
  , path: __dirname + '/public/'
  , libraryTarget: 'umd'
  }
, module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    , { test: /\.js$/,
      exclude: /node_modules/,
        use: [{loader:'babel-loader'}] }
    , { test: /\.jsx$/, exclude: /node_modules/, use: [{loader:'babel-loader'}] }
    ]
  }

, plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ]

, devtool: devMode ? "source-map" : false
}
