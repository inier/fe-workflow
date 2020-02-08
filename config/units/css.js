// css 提取 loader 配置
module.exports = (config, resolve) => {
    return (lang, test) => {
        const baseRule = config.module.rule(lang).test(test);
        const normalRule = baseRule.oneOf('normal');

        function applyLoaders(rule) {
            rule.use('extract-css-loader')
                .loader(require('mini-css-extract-plugin').loader)
                .options({
                    publicPath: './',
                });
            rule.use('css-loader')
                .loader('css-loader')
                .options({});
        }

        applyLoaders(normalRule);
    };
};
