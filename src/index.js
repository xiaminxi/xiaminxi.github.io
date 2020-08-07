/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 17:38:31
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-07 16:38:23
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\index.js
 */
import React from 'react'
import ReactDOM from "react-dom"
import BaseLayout from './layouts/BaseLayout'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(<ConfigProvider locale={zhCN}>
    <BaseLayout />
</ConfigProvider>, document.getElementById("root"))