var path= require('path'),
  webpack= require('webpack'),
  webpackHtmlPlugin= require('html-webpack-plugin'),
  BUILD_DIR= path.resolve(__dirname, 'dist'),
  APP_DIR= path.resolve(__dirname, 'src/app'),

  config= {
    entry: APP_DIR+ '/tour.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'tour.js'
    },
    plugins: [
      new webpackHtmlPlugin({
        title: 'The Knight\'s Tour',
      })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: APP_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['react'],
          }
        },
        { 
          test: /\.css$/, 
          loader: 'style-loader!css-loader' 
        },
      ],
    },
  };

module.exports= config;
