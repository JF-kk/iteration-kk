const port = 8080;
const url = 'http://127.0.0.1:8080';
// const url = '';
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/production-sub-path/': '/',    // 部署应用包时的基本 URL。
  // outputDir: 'dist',       // 生产环境构建文件的目录，默认是 dist
  // assetsDir: 'static',     // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录，默认是 static 。
  // indexPath : index.html,  // 指定生成的 index.html 的输出路径 (相对于 outputDir)，默认是 index.html 。也可以是一个绝对路径。
  devServer: {                // 环境配置
    port: port,
    open: true,               // 配置自动启动浏览器
    proxy: {                  // 配置代理
      '/api': {
        target: url,          // 设置调用的接口 url
        ws: true,
        changeOrigin: true    // 设置跨域
      },
    }
  }
}