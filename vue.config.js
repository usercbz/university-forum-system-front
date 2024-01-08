const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  devServer: {
    //端口
    port: 7070,
    // 代理
    proxy: {
      'api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
