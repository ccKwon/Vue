const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main.js'),
  watch: true,
  output: {
    path: path.join(__dirname + './dist'),
    // publicPath: '/dist',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    },

    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 7630
          }
        }
      ]
    },

    {
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
        }
      ]
    },

    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },

    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
        loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    },


    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },

    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    // host: '0.0.0.0',
    port: 8080,
    open: true,
    hot: true,
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',

      filename: 'index.html',
    })
  ]
};