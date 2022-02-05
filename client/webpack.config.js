const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Adds and configures workbox plugins for a service worker 
// and manifest file.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: "./src/index.js",
      install: './src/utils/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [

      new HtmlWebpackPlugin({
        template: "./index.html", 
        favicon: "./favicon.ico",
      }),

      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),

      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Flickering - an emotion tracker',
        short_name: 'Flickering',
        description: 'A application to track your emotions.',
        start_url: '/',
        publicPath: '/',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    
    // Adds CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader", 
            "css-loader",
          ]
        },
        {
          test: /\.m?js$/,
          exclude:/node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ], 
              plugins: [
                "@babel/plugin-proposal-object-rest-spread", 
                "@babel/transform-runtime",
              ]
            },
          },
        },
      ],
    },
  };
};