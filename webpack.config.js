const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
        mode: 'development',
        entry: './src/js/entry.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },

       module: {
           rules: [{
               test: /\.sass$/,
               use: [
                   "style-loader",
                   "css-loader",
                   "sass-loader"
               ]
           },
               {
                   test: /\.(ttf|eot|svg|png)$/,
                   use: [
                       {
                           loader: 'file-loader',
                           options: {
                               name: '[path][name].[ext]',
                           },
                       },
                   ],
               }]
       }
};