const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV=='production' ? 'production':'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {from: 'manifest.json', to: 'manifest.json'},
      {from: 'icons', to: 'icons'},
    ]),
  ],
};
