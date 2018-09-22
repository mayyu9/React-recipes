const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

require('dotenv').config(); // this tells webpack to read .env file and add those as global variables, which can be accessed using the process.env
module.exports= {

  entry: [ 'whatwg-fetch', './src/index.js'], //whatwg-fetch: is fetch polyfill, if browser doesn't support native fetch then pollyfill will be used. polyfill is fetch implementation.
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
      {
        test: /\.(png|jp(e*)g|svg)$/, //javascript regex, webpack uses this to check for that file in the project and apply that particular loader fpr those files.
        use: {
          loader: 'file-loader'
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html', // this is to inform webpack which file to be used
    }),
    new webpack.DefinePlugin({    //DefinePlugin helps to search for the defined particular word and replace that with process.env defined variables.
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ]
};
