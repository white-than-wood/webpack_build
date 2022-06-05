// 赋值复制
const {count, addCount} = require("./module/index.js");

require('./index.css');

console.log(count);
addCount();
console.log(count);

const root = document.getElementById('root');
root.innerText = 'webpack build!!!!';