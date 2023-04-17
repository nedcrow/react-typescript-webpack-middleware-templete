const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: {
      app: path.join(__dirname, 'src', 'index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devServer: {
      static: './dist'
    },
    
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],

    module: {
      rules: [
          // `js` and `jsx` files are parsed using `babel`
          {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          // `ts` and `tsx` files are parsed using `ts-loader`
          { 
            test: /\.(ts|tsx)$/, 
            loader: "ts-loader" 
          },
          {
            test: /\.(jpg|png|gif|svg)$/,
            use: ["file-loader"],
          },
          {
            test: /\.css$/i,
            exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]?[hash]',
                }
              },
            ],
          },
      ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],  
  },
};