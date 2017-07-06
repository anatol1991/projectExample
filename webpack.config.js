var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './main.js'
  ],

  output: {
    path: __dirname+'./',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.eot(\?v=\d+\. \d+\. \d+)?$/,
        loader: 'file'
      },
      { test: /node_modules\/dist\/bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig
  ]
};
