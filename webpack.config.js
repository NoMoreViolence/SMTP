const path = require('path');

const config = {
  target: 'node',
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
