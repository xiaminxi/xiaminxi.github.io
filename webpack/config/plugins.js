/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 18:07:56
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-06-05 18:41:51
 * @Description: webpack 插件配置文件
 * @FilePath: \react-admin\webpack\config\plugins.js
 */ 

// 文件路径
const path = require("path")
// webpack
const webpack = require("webpack")
// 指定模板 生成index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除上一次打包的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    new webpack.DefinePlugin({  NODE_ENV: JSON.stringify(process.env.NODE_ENV)  }),
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!color.less*'], }),
    // 创建模板
    new HtmlWebpackPlugin({
        // template: "./src/index.html",
        template: path.resolve(__dirname, '../../src', 'index.html'),//模板
        filename: "index.html",
        // inject: true, //允许插件修改哪些内容，包括head与body
        minify: {
            // 是否删除双引号
            removeAttributeQuotes: true,
            // 是否折叠空行 --让代码成为一行
            collapseWhitespace: false
        },
        // 是否添加哈希值
        hash: true,
        chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none'
    }),
]