const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './index.js',
  
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    port: 5500
  },
  output: {
    path: path.resolve("../", 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        
        use: [
            'style-loader', 
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            }, {
              loader: 'sass-loader',
              options: {sourceMap: true}
               }
             ]
        
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      

    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin('./scss/base.scss'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html" })
  

  ]
};