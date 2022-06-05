// 赋值复制
const {count, addCount} = require("@/index");

require('./style');

console.log(count);
addCount();
console.log(count);

const root = document.getElementById('root');
root.innerText = 'webpack build!!!!';