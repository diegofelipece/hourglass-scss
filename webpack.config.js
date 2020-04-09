const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevMode = process.env.NODE_ENV !== 'production';

const DIR = {
  DEMO: path.resolve('./demo'),
  SASS: path.resolve('./scss'),
  DIST: path.resolve('./dist'),
}

const config = {
  mode: isDevMode ? 'development' : 'production',
  entry: './hourglass.js',
  output: {
    filename: isDevMode ? 'hourglass.js' : 'hourglass.min.js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
      filename: isDevMode ? 'hourglass.css' : 'hourglass.min.css',
    }),
  ],
  // devServer: {
  //   contentBase: DIR.DEMO,
  //   compress: true,
  //   port: 8080
  // }
}

module.exports = config;
