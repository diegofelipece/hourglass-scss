const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevMode = process.env.NODE_ENV !== 'production';
const minifiedName = isDevMode ? '' : '.min';

const DIR = {
  DEMO: path.resolve(__dirname, './demo'),
  SASS: path.resolve(__dirname, './scss'),
  DIST: path.resolve(__dirname, './dist'),
}

const config = {
  mode: 'production',
  entry: {
    hourglass: `${DIR.SASS}/hourglass.scss`,
  },
  output: {
    filename: `[name]${minifiedName}.js`,
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]${minifiedName}.css`,
    })
  ]
}

if (isDevMode) {
  config.mode = 'development';

  config.entry = {
    demo: `${DIR.DEMO}/scss/style.scss`
  };

  config.plugins.push(new HtmlWebpackPlugin({
    path: DIR.DEMO,
    template: `${DIR.DEMO}/index.html`
  }));

  config.devServer = {
    contentBase: DIR.DEMO,
    compress: true,
    port: 8080
  };
}

module.exports = config;
