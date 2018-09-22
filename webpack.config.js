const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports= {

  entry: './src/index.js',
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //javascript regex, webpack uses this to check for that file in the project and apply that particular loader fpr those files.
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html', // this is to inform webpack which file to be used
    })
  ]
};
