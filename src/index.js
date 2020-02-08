const css = import("./style/index.css");
const b = import("./async.js");
const a = 100;

console.log("a:", a);

Promise.all([css, b]).then(result => {
  console.log("css-b", result);
});
