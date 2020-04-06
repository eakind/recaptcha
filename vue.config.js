let path = require('path');
let TerserPlugin = require('terser-webpack-plugin');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  chainWebpack: config => {
    config.module.rule('vue|js')
      .test('/\.(js|vue)$/')
      .use('eslint-loader')
      .loader('eslint-loader')
    // .include([path.join(__dirname, 'src')])
      .options({
        fix: true
      });
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'));
  },
  configureWebpack: {
    optimization: {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: false
            }
          }
        })
      ]
    }
  }
};
