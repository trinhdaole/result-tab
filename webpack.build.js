var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();
module.exports = {
  entry: path.resolve(process.cwd(), 'index.js'),
  output: {
    filename: 'index.js',
    path: 'dist/',
    libraryTarget: 'commonjs2',
    library: 'neptune-map-finder'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-body-subtree': 'react-body-subtree'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader')
      }
    ]
  },
  plugins: [new ExtractTextPlugin('[name].css')]
};
