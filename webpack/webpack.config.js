/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 17:01:31
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-06 12:49:45
 * @Description: webpack配置文件
 * @FilePath: \xiaminxi.github.io\webpack\webpack.config.js
 */

// 文件路径
const path = require("path")
// 合并打包配置
const webpackMerge = require('webpack-merge');
const publicPath ='http://localhost:8090/'

const webpackConfig = {
    // 打包入口
    entry: {
        app: "./src/index.js"
    },
    // 打包输出
    output: {
        filename: "js/[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath
    },
    // 开发服务
    devServer: {
        // public: 'localhost:8090',
        public: "http://localhost:8090",
        publicPath,
        // open: "localhost",
        // 这个是为了能在手机上看
        host: "0.0.0.0",
        // 端口号
        port: 8090,
        // 是否显示进度条
        progress: process.env.NODE_ENV === "dev",
        // 监听的目录
        contentBase: path.resolve(__dirname, '../dist'),

        // 是否自动打开浏览器
        open: true,
        // 是否启用服务器压缩
        compress: true,
        historyApiFallback: true,
        // proxy: {
        //     '/': {
        //         // target: publicPath,
        //         secure: false,
        //         bypass: function (req, res, proxyOptions) {
        //             console.log('Skipping proxy for browser request.', publicPath)
        //             if (req.headers.accept.indexOf('html') !== -1) {
        //                 console.log('Skipping proxy for browser request.');
        //                 return `${publicPath}/index.html`;
        //             }
        //         }
        //     }
        // }

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