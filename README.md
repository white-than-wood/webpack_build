# webpack_build

## Gulp

* task: 注册任务
* run: 执行任务
* pipe: 建立"流"链接
* watch: 监听任务
* src: 读取文件
* dest: 写入文件

## webpack

> 步骤

  安装

    npm install webpack webpack-cli

  安装至全局
  
    npm install webpack-cli webpack webpack-dev-server -g

## webpack-dev-server

> 原理

  webpack-dev-server主要是运用了websocket长链接以及webpack --watch监听.webpack-dev-server会将websocket client功能代码注册至客户端中,建立长链接,当监听到项目内容发生变化时,会引起项目重新构建打包,这是webpack-dev-server server端通过websocket会告知远程客户端,远程客户端就会进行强制刷新.
  
  - hot

    hot 是 webpack-dev-server 配置中的属性,意为是否开启模块热更新.实际上就是指当通过长链接会告知 websocket client 端从而实行远程客户端页面的强制刷新时,这时候不实行整个页面的全局刷新,而是实行发生局部改动模块的热替换,从而实现局部刷新.