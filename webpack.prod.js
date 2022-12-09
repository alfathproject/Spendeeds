const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
// const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// const ImageminMozjpeg = require('imagemin-mozjpeg');
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 20000,
    //   maxSize: 70000,
    //   minChunks: 1,
    //   maxAsyncRequests: 30,
    //   maxInitialRequests: 30,
    //   automaticNameDelimiter: '~',
    //   enforceSizeThreshold: 50000,
    //   cacheGroups: {
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
  },
  plugins: [
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
    }),
    // new ImageminWebpackPlugin({
    //   plugins: [
    //     ImageminMozjpeg({
    //       quality: 50,
    //       progressive: true,
    //     }),
    //   ],
    // }),
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /\.(jpe?g|png)/,
    //       options: {
    //         quality: 50,
    //       },
    //     },
    //   ],
    //   overrideExtension: true,
    // }),
    new MiniCssExtractPlugin(),
  ],
});
