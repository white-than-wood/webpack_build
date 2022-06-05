const path = require('path');
// 清理webpack导出模块插件
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
// webpack外链样式表导出插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack html文件处理插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 命令行打开浏览器配置依赖
const open = require('open');

// 入口文件
const SRC_DIR = path.join(__dirname, 'src', 'index.js');
// 导出chunks模块所在的目录
const DIST_DIR = path.resolve(__dirname, './dist');
// 配置DevServer服务的根目录
const BASE_DIR = path.join(__dirname, 'dist');
// 资源前缀
const PUBLIC_DIR = './';
// 环境变量
const NODE_ENV = process.env.NODE_ENV;
// webpack-dev-server端口号
const PORT = 9999;

module.exports = {
	entry: {
		index: SRC_DIR
	},
	output: {
		path: DIST_DIR,
		filename: 'js/[name].[fullhash].js',
		library: {
			name: 'webpackBuild',
			type: 'umd',
			export: 'default'
		}
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
			filename: 'css/[name].[contenthash:8].css'
		}),
		new HtmlWebpackPlugin({
			publicPath: PUBLIC_DIR,
			filename: 'index.html',
			template: path.join(__dirname, 'src', 'index.html'),
			chunks: ['index'],
			minify: true,
			inject: 'body'
		})
	],
	devtool: 'cheap-source-map',
	devServer: {
		host: 'localhost',
		port: PORT,
		//是否启用热更新
		hot: true,
		open: {
			app: {
				name: open.apps.chrome
			}
		}
	},
};