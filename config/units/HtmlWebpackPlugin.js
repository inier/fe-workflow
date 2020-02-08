// html自动生成
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('../common');

module.exports = (config, resolve) => {
    return () => {
        config.plugin('html').use(HtmlWebpackPlugin, [
            {
                template: `${commonConfig.path.static}/index.html`,
            },
        ]);
    };
};
