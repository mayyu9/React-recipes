const webpack = require('webpack');

module.exports= {
  entry: './index.js',
  output: {
    path:__dirname,
    filename: './bundle.js'
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
  }
};
