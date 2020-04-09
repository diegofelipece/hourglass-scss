const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DIR = {
  DEMO_DIR: path.resolve('demo'),
  SASS: path.resolve('scss'),
  DIST: path.resolve('dist'),
}

module.exports = {
  mode: 'development',
  entry: './hourglass.js',
  output: {
    filename: 'hourglass.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // not sass-loader
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'hourglass.css',
    }),
  ],
  // devServer: {
  //   contentBase: DIR.DEMO,
  //   compress: true,
  //   port: 8080
  // }
}
