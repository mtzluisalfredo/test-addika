const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
    inline: true,
  },
  mode: 'development',
});
