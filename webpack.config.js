const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
        mode: 'development',
        entry: './src/js/entry.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },

       module: {
           rules: [
               {
                   test: /\.(html)$/,
                   use: {
                       loader: 'html-loader',
                   }
               },
               {
                   test: /\.m?js$/,
                   exclude: /(node_modules|bower_components)/,
                   use: {
                       loader: 'babel-loader',
                       options: {
                           presets: ['@babel/preset-env']
                       }
                   }
               },
               {
                   test: /\.css$/,
                   use: [
                       "style-loader",
                       "css-loader"
                   ]
               },
               {
                   test: /index.sass$/,
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