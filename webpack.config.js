const path = require('path');

// 入口文件
const SRC_DIR = path.join(__dirname, 'src', 'index.js');
// 导出chunks模块所在的目录
const DIST_DIR = path.resolve(__dirname, './dist');

module.exports = {
	entry: SRC_DIR,
	output: {
		path: DIST_DIR,
		filename: 'index.js'
	}
};