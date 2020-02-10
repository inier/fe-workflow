// 并发执行加速构建
// https://webpack.docschina.org/loaders/thread-loader/

module.exports = (config, resolve) => {
    const baseRule = config.module.rule('js').test(/.js|.tsx?$/);
    return () => {
        const useThreads = true;
        if (useThreads) {
            const threadLoaderConfig = baseRule.use('thread-loader').loader('thread-loader');
            threadLoaderConfig.options({ workers: 3 });
        }
    };
};
