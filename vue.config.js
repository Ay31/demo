module.exports = {
  devServer: {
    proxy: {
      'api': {
        target: 'https://douban-api.uieee.com/',
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
