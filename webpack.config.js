const rimraf = require("rimraf");
const Config = require("webpack-chain");
const { resolve } = require("./config/utils");

const config = new Config();

// 删除 dist 目录
rimraf.sync("dist");

// webpack 配置
// 原生配置
// module.exports = {
//     entry: './src/index',
//     mode: process.env.NODE_ENV,
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
// };

// 通过webpack-chain 配置
config
  // 入口
  .entry("index")
  .add(resolve("src/index.js"))
  .end()
  // 模式 等价.mode(process.env.NODE_ENV)
  .set("mode", process.env.NODE_ENV)
  // 出口
  .output.path(resolve("dist"))
  .filename("[name].bundle.js");

config.module
  .rule("css")
  .test(/\.css$/)
  .use("css")
  .loader("css-loader");

module.exports = config.toConfig();
