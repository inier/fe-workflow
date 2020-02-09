// 默认通用配置
const { PORT } = process.env;

module.exports = {
    port: PORT, // 端口号
    publicPath: '', // 公共地址，用于处理静态资源的引用问题，可以是相对路径或CDN等绝对地址
    path: {
        src: 'src',
        dist: 'dist',
        test: 'test',
        static: 'public',
    },
    sourcemap: 'cheap-source-map', // 关闭：设为false或不设置该key；设置为true，默认为'cheap-source-map'
};
