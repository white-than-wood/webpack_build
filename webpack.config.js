// node工具,路径巡航,可多种方式解析指定项目的路径
const path = require('path');
// 输出外连css文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 每次实行构建打包,对原有的已构建打包的资源进行清空
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
// 输出文件绝对路径
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
// 用于接收外部传入区分环境的变量
const NODE_ENV = process.env.NODE_ENV;
// webpack-dev-server 服务端口
const PORT = 9999;

// Gulp
// task 任务,run 运行,watch 监听,src 读取,dest 写入,pipe 流连接
const webpack_config = {
    //入口,相对路径
    entry: './src/index.js',
    //相当于旧版webpack.DefinePlugin
    mode: NODE_ENV,
    //输出
    output: {
        //输出文件公共路径
        publicPath: '.',
        //输出文件名称
        filename: 'index.js',
        //输出文件路径,绝对路径
        path: OUTPUT_DIR 
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader',
            }]
            // minimize: true 压缩配置在 webpack 3.0 以及 css-loader 1.0 删除
            //     options: {
            //         minimize: true
            //     }
            // }]
        }]
    },
    // webpack --watch 监听的工作原理:
    // webpack 会将最近两次发生修改的时间进行对比,假如发现内容有所不一致,且在 aggregateTimeout 时间范围内没有再次出现内容修改并对比不一致的状况,则 webpack 实行构建打包
    // watch: true,
    // watchOptions: {
    //     对于某些目录不实行监听
    //     ignored: /node_modules/,
    //     聚合超时,也就是在此范围内没有再次发生内容修改并内容不一致的情况,假如出现则 webpack 不实行构建,以当前出现的时间点作为基准,再次延时监听,否则 webpack 实行构建打包
    //     aggregateTimeout: 500,
    //     对于实行监听的项目目录 1s 内监听的频率
    //     poll: 1000
    // },
    // webpack-dev-server 配置
    devServer: {
        host: 'localhost',
        port: PORT,
        //是否启动模块热更新
        hot: true
        // webpack 5.x 将 contentBase 置为 static
        // contentBase: OUTPUT_DIR
        // webpack-dev-server 服务所执行的目录
        // static: OUTPUT_DIR
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};

module.exports = webpack_config;