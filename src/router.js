/*
 * @Author: 夏民喜
 * @Date: 2020-11-21 02:56:02
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-27 22:04:17
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'

import { createBrowserHistory } from 'history'

import { Router, Switch, Route } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { BrowserRouter } from 'react-router-dom';
import getComponent from './routes/AsyncComponent';
const browserHistory = createBrowserHistory()


function RouterConfig({ history, app }) {
    return (
        <BrowserRouter  >
                <Route path="/" render={props => <BaseLayout {...props} />} />
        </BrowserRouter>
    )
}
export default RouterConfig