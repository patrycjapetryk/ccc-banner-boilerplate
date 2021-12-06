const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: __dirname + '/dist/',
    publicPath: '',
    // assetModuleFilename: 'images/[name].[hash:8][ext][query]',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              {
                tag: 'img',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'img',
                attribute: 'data-gallery-src',
                type: 'src',
              },
              {
                tag: 'source',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'video',
                attribute: 'poster',
                type: 'src',
              },
            ],
          },
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp4|webm$/i,
        type: 'asset/resource',
        generator: {
          // filename: 'video/[name].[hash:8][ext][query]',
          filename: 'video/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html',
      minify: false,
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/slider.html',
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'index.html',
    //   minify: false,
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/listing.html',
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'index.html',
    //   minify: false,
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/infobox-1.html',
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'index.html',
    //   minify: false,
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/doublebox.html',
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'index.html',
    //   minify: false,
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/slider-nav.html',
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'index.html',
    //   minify: false,
    // }),
  ],
};
