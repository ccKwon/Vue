const path = require('path');

// 导入 在内存中生成 HTML 页面的插件 html-webpack-plugin
// 只要是插件 就一定要放到 plugins 中去
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/js/main.js'),
  watch: true,
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },

  plugins: [


    new HtmlWebpackPlugin({ //创建一个在内存中生成 HTML 的插件

      // 指定模板页面 将来根据指定的页面路径生成内存中的页面      
      template: path.resolve(__dirname, './src/index.html'),
      // 指定生成的页面的名称
      fileName: 'index.html'
    })
  ],

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
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },


    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    inline: true,
    // host: '127.0.0.1',
    port: 8080,
    open: true,
    hot: true,
  },

  // stats: {
  //   // One of the two if I remember right
  //   entrypoints: false,
  //   children: false
  // },


};