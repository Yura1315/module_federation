const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { dependencies: deps } = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        legalEnquiry: 'legalEnquiry@/legalEnquiry/legalEnquiry.js',
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
      },
    }),
  ],

  output: {
    filename: '[name]_[fullhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/portal/',
    clean: true,
  },
});
