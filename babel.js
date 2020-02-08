// 使用 babel 配置 ts
module.exports = function(api) {
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        chrome: 59,
                        edge: 13,
                        firefox: 50,
                        safari: 8,
                    },
                },
            ],
            [
                '@babel/preset-typescript',
                {
                    allExtensions: true,
                },
            ],
        ],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-transform-typescript',
            'transform-class-properties',
            '@babel/proposal-object-rest-spread',
        ],
    };
};
