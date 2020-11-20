/*
 * @Author: 夏民喜
 * @Date: 2020-11-21 02:56:02
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-21 03:04:25
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'

import { createBrowserHistory } from 'history'

import { Router, Switch, Route } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
const browserHistory = createBrowserHistory()


function RouterConfig({ history, app }) {
    return (
        <Router history={browserHistory} >
            <Switch>
                <Route path="/" render={props => <BaseLayout {...props} />} />
            </Switch>
        </Router>
    )
}
export default RouterConfig