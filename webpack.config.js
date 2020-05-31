const path = require('path');

const config = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'awesome-typescript-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};

module.exports = config;
