/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 18:03:43
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-05-27 22:27:28
 * @Description: webpack loader配置文件
 * @FilePath: \react-admin\webpack\config\rules.js
 */
module.exports = {
    rules: [
        // {
        //     test: /\.css|.less|.sass|.scss$/,
        //     exclude: /node_modules/,
        //     use: [
        //         // { loader: MiniCssExtractPlugin.loader },
        //         { loader: 'style-loader' },
        //         {

        //             loader: "css-loader",
        //             options: {
        //                 importLoaders: 1,
        //                 modules: {
        //                     // 重新生成样式类名
        //                     localIdentName: '[name]__[local]--[hash:base64:5]'
        //                 }
        //             }
        //         },
        //         {
        //             loader: 'postcss-loader',
        //             options: {
        //                 plugins: [
        //                     // require("autoprefixer") /*在这里添加*/
        //                 ]
        //             }
        //         },
        //         {
        //             loader: "less-loader",
        //             options: {
        //                 lessOptions: {
        //                     javascriptEnabled: true,
        //                 }
        //             }
        //         }
        //     ],
        // },

        // // 针对node_modules下的样式文件
        // {
        //     test: /\.css|.less|.sass|.scss$/,
        //     include: /node_modules/,
        //     use: [
        //         // { loader: MiniCssExtractPlugin.loader },
        //         { loader: 'style-loader' },
        //         { loader: 'css-loader' },
        //         {
        //             loader: 'less-loader', options: {
        //                 lessOptions: {
        //                     javascriptEnabled: true,
        //                 }
        //                 // modifyVars: theme,
        //             }
        //         }
        //     ]
        // },
        {
            test: /\.css|.less|.sass|.scss$/,
            use: [
                { loader: "style-loader" },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: "less-loader",
                    options: {
                            javascriptEnabled: true,
                    }
                }
            ],
        },
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    // es6、7语法支持
                    presets: ["env", "es2015", "react", "stage-0"],
                    //    插件
                    plugins: [
                        // import 语法支持、antd按需加载
                        ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
                        // 支持装饰器语法
                        [require.resolve('babel-plugin-transform-decorators-legacy'), { legacy: true }]
                    ]
                }
            },
        },
    ]
}