const HtmlWebpackPlugin = require('html-webpack-plugin');
const lessVariables = require('../src/lessVariables');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        exclude: /fonts/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,

        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,

                modifyVars: lessVariables,
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@root': path.resolve(__dirname, '../src'),
      '@store': path.resolve(__dirname, '../src/Redux/store.ts'),
      '@actions': path.resolve(__dirname, '../src/Redux/actions.ts'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
  ],
};
