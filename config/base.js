// webpack基础配置
const path = require('path');
const Config = require('webpack-chain');
const { findSync, resolve } = require('./utils');

const config = new Config();

const files = findSync('config/units');

module.exports = () => {
    const map = new Map();

    files.map((_) => {
        const name = path.basename(_, '.js');
        return map.set(name, require(_)(config, resolve));
    });

    map.forEach((v, key) => {
        // css 配置
        if (key === 'css') {
            v('css', /\.css$/);
        } else {
            v();
        }
    });

    return config;
};
