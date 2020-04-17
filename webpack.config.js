const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV=='production' ? 'production':'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {from: 'css', to: 'css'},
      {from: 'audio', to: 'audio'},
      {
        from: 'manifest.json',
        to: 'manifest.json',
        transform(content) {
          // Copy name, description & version from the package.json
          // file and put it in the chrome extension manifest.
          const manifest = JSON.parse(content.toString());
          const pkgPath = path.resolve(__dirname, 'package.json');
          const pkg = JSON.parse(fs.readFileSync(pkgPath));

          manifest['version'] = pkg['version'];
          manifest['author'] = pkg['author'];
          manifest['homepage_url'] = pkg['repository'];
          manifest['description'] = pkg['description'];

          const data = JSON.stringify(manifest, null, 2);
          return Buffer.from(data);
        },
      },
      {from: 'icons', to: 'icons'},
    ]),
  ],
};
