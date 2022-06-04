const path = require('path');

const SRC_DIR = path.resolve(__dirname, './index');
const DIST_DIR = path.resolve(__dirname, './dist');

module.exports = {
	entry: SRC_DIR,
	output: {
		path: DIST_DIR,
		filename: 'index.js'
	}
};