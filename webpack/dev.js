/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 16:50:34
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-27 15:40:15
 * @Description: 请输入文件说明
 * @FilePath: \react-admin\webpack\dev.js
 */ 
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    mode: "development",
      // 代码分割
      optimization: {
        // 生成运行时文件 可选值：
        // true: 对于每个entry会生成runtime~${entrypoint.name}的文件。
        // "single": 会生成一个唯一单独的runtime.js文件，就是manifest。
        // multiple: 和true一致。
        // name: {}: 自定义runtime文件的name
        // runtimeChunk: true,
        // 是否压缩js代码
        // minimize: true,
        // 编译错误的时候是否不生成资源, 默认为 true
        noEmitOnErrors: true,
        // 可以自定义UglifyJsPlugin和一些配置,默认的压缩为uglifyjs-webpack-plugin
        minimizer:  [
            new UglifyJsWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: process.env.NODE_ENV === "dev"
            }),
        ],
        splitChunks: {
            // async 分割异步打包的代码，
            // all 同时分割同步和异步代码,推荐
            // initial 也会同时打包同步和异步，但是异步内部的引入不再考虑
            // chunks: 'all',
            // // 最小文件大小
            // minSize: 0,
            // // 最小公用模块次数，默认为1
            // minChunks: 1,
            // // 按需加载时候最大的并行请求数
            // maxAsyncRequests: Infinity,
            // // 一个入口最大的并行请求数
            // maxInitialRequests: Infinity,
            // // 分割的js名称，默认为true，返回 ${cacheGroup的key} ${automaticNameDelimiter} ${moduleName},可以自定义
            // name: true,
            // 缓存策略，默认设置了分割node_modules和公用模块。内部的参数可以和覆盖外部的参数
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/, // 如果需要的依赖特别小，可以直接设置成需要打包的依赖名称
            //         name(module, chunks, chcheGroupKey) { // 可提供布尔值、字符串和函数，如果是函数，可编写自定义返回值
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1] // 获取模块名称
            //             return `npm.${packageName.replace('@', '')}` // 可选，一般情况下不需要将模块名称 @ 符号去除
            //         }
            //     }
            // }


            chunks: 'all',
            minSize: 300,
            maxSize: 300000,
            minChunks: 1,
            maxAsyncRequests: Infinity,
            maxInitialRequests: Infinity,
        }
    }
}