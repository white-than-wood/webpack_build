const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 入口文件
const SRC_DIR = path.join(__dirname, 'src', 'index.js');
// 导出chunks模块所在的目录
const DIST_DIR = path.resolve(__dirname, './dist');
// 环境变量
const NODE_ENV = process.env.NODE_ENV;

	module.exports = {
	entry: SRC_DIR,
	output: {
		path: DIST_DIR,
		filename: 'index.js'
	},
	mode: NODE_ENV,
	module: {
		// rules: [{
		// 	test: /.css$/,
		// 	use: [{
		// 		loader: 'style-loader'
		// 	}, {
		// 		loader: 'css-loader'
		// 	}]
		// }]
		rules: [{
			test: /.css$/,
			use: [MiniCssExtractPlugin.loader, {
				loader: 'css-loader'
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'index.css'
		})
	]
};