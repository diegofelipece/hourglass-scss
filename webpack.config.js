const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEMO_DIR = path.resolve(__dirname, 'demo')

const config = {
  devServer: {
    contentBase: DEMO_DIR,
    compress: true,
    port: 8080
  },
}

module.exports = config
