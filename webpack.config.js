const path = require('path');
// 清理webpack导出模块插件
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
// webpack外链样式表导出插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack html文件处理插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩css插件
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 命令行打开浏览器配置依赖
const open = require('open');

// 入口文件
const SRC_DIR = path.join(__dirname, 'src', 'index.tsx');
// 导出chunks模块所在的目录
const DIST_DIR = path.resolve(__dirname, './dist');
// 配置DevServer服务的根目录
const BASE_DIR = path.join(__dirname, 'dist');
// 资源目录前缀
const PUBLIC_DIR = './';
// 环境变量
const NODE_ENV = process.env.NODE_ENV;
// webpack-dev-server端口号
const PORT = 9999;

module.exports = {
	entry: {
		// 指的是 webpack 运行时所指向的工作目录
		// context
		index: SRC_DIR
	},
	output: {
		path: DIST_DIR,
		filename: 'js/[name].[fullhash].js',
		// 指的是每个入口chunk模块导出时文件的名称
		chunkFilename: 'js/[name].[fullhash].js',
		// 模块导出配置,使用'umd'模块类型导出,模块导出的名称为'webpackBuild',commonjs2不需要模块导出名称(module.exports)
		library: {
			name: 'webpackBuild',
			type: 'umd',
			export: 'default'
		}
	},
	optimization: {
		minimizer: [
			new CSSMinimizerPlugin()
		]
	},
	mode: NODE_ENV,
	resolve: {
		//查询解析模块时,有过长的目录路径时,可省略不必要的前缀,用句柄简称来代替
		alias: {
			'@': path.resolve(__dirname, 'src', 'module'),
		},
		//查询解析模块时,省略后缀
		extensions: ['.ts', '.js', '.css', '.less', '.sass']
	},
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
			test: /.tsx?$/,
			use: [{
				loader: 'babel-loader',
			}, {
				loader: 'ts-loader'
			}],
			exclude: /node_modules/
		}, {
			test: /\.jsx?$/,
			use: [{
				loader: 'babel-loader'
			}],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, {
				loader: 'css-loader'
			}]
		}, {
			test: /\.less$/,
			use: [MiniCssExtractPlugin.loader, {
				loader: 'css-loader',
				options: {
					importLoaders: 2
				}
			}, {
				loader: 'postcss-loader'
			}, {
				loader: 'less-loader'
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
	watchOptions: {
		poll: true,
		aggregateTimeout: 1000
	},
	stats: {
		preset: 'errors-warnings',
		colors: true
	},
	devServer: {
		host: 'localhost',
		port: PORT,
		//是否启用热更新
		hot: true,
		open: {
			app: {
				name: open.apps.chrome
			}
		},
		//开启Gzip压缩
		compress: true,
		client: {
			// webpack-dev-server 配置的websocket client端日志等级
			logging: 'verbose'
		},
		proxy: {}
	},
};