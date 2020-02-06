const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');



module.exports = {
  entry: './src/index.js',
  mode:'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 5500
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin('./css/style.css'),
    new webpack.HotModuleReplacementPlugin()   ]
};