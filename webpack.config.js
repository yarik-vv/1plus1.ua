'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/Development',

  entry: './build',

  output: {
    path: __dirname + '/Production',
    publicPath: '/',
    filename: '[name].js'
  },

  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: __dirname + '/Development',
        use: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            { loader: 'css' },
            {
              loader: 'postcss',
              options: {
                plugins: function() {
                  return [require('autoprefixer')];
                }
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|otf|woff|woff2)$/,
        exclude: /(node_modules)/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new CleanWebpackPlugin(__dirname + '/Production/*'),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: 'index.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        useShortDoctype: true,
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        caseSensitive: true,
        sortAttributes: true,
        sortClassName: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeRedundantAttributes: true,
        keepClosingSlash: true,
        minifyURLs: true,
        preventAttributesEscaping: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new StyleExtHtmlWebpackPlugin('styles.css')
  ],

  devServer: {
    contentBase: __dirname + '/Production',
    port: 9000,
    compress: true,
    inline: true,
    hot: true
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  );
}
