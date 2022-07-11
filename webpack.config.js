// node工具,路径巡航,可多种方式解析指定项目的路径
const path = require('path');
// 输出文件路径
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const webpack_config = {
    //入口,相对路径
    entry: './src/index.js',
    //输出
    output: {
        //输出文件公共路径
        publicPath: '.',
        //输出文件名称
        filename: 'index.js',
        //输出文件路径,绝对路径
        path: OUTPUT_DIR 
    }
};

module.exports = webpack_config;