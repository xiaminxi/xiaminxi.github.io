/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 17:01:31
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-06-05 19:41:13
 * @Description: webpack配置文件
 * @FilePath: \react-admin\webpack\webpack.config.js
 */

// 文件路径
const path = require("path")
// webpack
const webpack = require("webpack")
// 合并打包配置
const webpackMerge = require('webpack-merge');
// 指定模板 生成index.html
const htmlWebpackPlugin = require("html-webpack-plugin");
// 清除上一次打包的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    // 打包入口
    entry: {
        app: "./src/index.js"
    },
    // 打包输出
    output: {
        filename: "js/[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "../dist")
    },
    // 开发服务
    devServer: {
        public: 'localhost:8010',

        // open: "localhost",
        // 这个是为了能在手机上看
        host: "0.0.0.0",
        // 端口号
        port: 8010,
        // 是否显示进度条
        progress: process.env.NODE_ENV === "dev",
        // 监听的目录
        contentBase: path.resolve(__dirname, '../dist'),

        // 是否自动打开浏览器
        open: true,
        // 是否启用服务器压缩
        compress: true,
    },
    devtool: process.env.NODE_ENV === "dev" ? "source-map" : "none",
    // 插件
    plugins: require("./config/plugins"),
    // 模块
    module: require("./config/rules"),
}

module.exports = function () {
    console.log("这是个啥：", process.env.NODE_ENV)
    switch (process.env.NODE_ENV) {
        case "dev":
            return webpackMerge({}, webpackConfig, require('./dev'))
        case "test":
            return webpackMerge({}, webpackConfig, require('./test'))
        case "prod":
            return webpackMerge({}, webpackConfig, require('./prod'))
    }
}