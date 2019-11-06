const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const BASE_DIR = path.resolve('./');

const defaultEntries = {
  index: ['./index.js'],
};

module.exports = {
  context: path.join(BASE_DIR, 'src'),

  entry: defaultEntries,

  output: {
    path: path.join(BASE_DIR, 'dist'),
    filename: 'js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve('src'),
      __STATIC__: path.resolve('src'),
    },
  },

  stats: {
    children: false,
  },

  plugins: [
    new VueLoaderPlugin(),
  ],
};
