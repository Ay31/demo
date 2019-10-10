module.exports = {
  devServer: {
    proxy: {
      'api': {
        target: 'https://douban.uieee.com',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          'api': ''
        }
      }
    }
  }
}
