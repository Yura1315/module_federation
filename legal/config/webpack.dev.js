const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { dependencies: deps } = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3003,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'legal',
      library: {
        type: 'var',
        name: 'legal',
      },
      filename: 'legal.js',
      exposes: {
        './App': './src/main.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
  ],

  output: {
    filename: '[name]_[fullhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:3003/',
    clean: true,
  },
});
