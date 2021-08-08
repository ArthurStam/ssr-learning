const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/'
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  }
}
