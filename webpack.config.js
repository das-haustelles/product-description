const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  }
};
