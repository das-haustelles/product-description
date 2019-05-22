const path = require('path');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/client'),
  // entry: `${__dirname  }/client/index.js`,
  module: {
    rules: [{
      test: [/\.(js|jsx)$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // plugins: [
  //   new BrotliGzipPlugin({
  //     asset: '[path].br[query]',
  //     algorithm: 'brotli',
  //     test: /\.(js|css|html|svg)$/,
  //     threshold: 10240,
  //     minRatio: 0.8,
  //     quality: 11,
  //   }),
  //   new BrotliGzipPlugin({
  //     asset: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: /\.(js|css|html|svg)$/,
  //     threshold: 10240,
  //     minRatio: 0.8,
  //   }),
  // ],
};
