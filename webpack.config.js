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
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};

module.exports = webpack_config;