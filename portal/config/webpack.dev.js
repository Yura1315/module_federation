const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { dependencies: deps } = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: { overlay: false },
    static: path.join(__dirname, 'dist'),
    port: 3001,
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        legal: 'legal@http://localhost:3003/legal.js',
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
    publicPath: 'http://localhost:3001/',
    clean: true,
  },
});
