// 默认通用配置

module.exports = {
  port: 8080, // 端口号
  publicPath: "/common/", // 公共地址，用于处理静态资源的引用问题，可以是相对路径或CDN等绝对地址
  path: {
    src: "src",
    dist: "dist",
    static: "public"
  }
};
