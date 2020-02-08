import TS from './ts/index.ts';

require('./style/index.css');
require('./style/app.css');
require('./style/index.less');
require('./style/index.scss');
require('./style/index.postcss');

console.log(new TS('123'));

setTimeout(() => {
    //动态加载
    import('./async.js')
        .then((result) => {
            console.log('async:', result.default);
            document.body.append(result.default);
        })
        .catch((error) => {
            console.error(error);
        });
}, 3000);
