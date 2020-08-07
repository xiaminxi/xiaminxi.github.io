/*
 * @Author: 夏民喜
 * @Date: 2019-09-06 03:40:21
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-07 19:31:30
 * @Description: 请输入文件描述
 */
import React, { Component } from 'react'
import { Layout, Menu, Form, Row, Col, Button, Card, Breadcrumb } from 'antd';
import { routerData } from '../../routes/routerConfig';
import { Link } from 'react-router-dom';
import CommonCard from '../../pages/Component/CommonCard';

const { Header } = Layout;

export default class GlobalHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // 匹配左侧菜单路由
    getrouter = (targetPath, routerData, result, parent) => {
        for (let index = 0; index < routerData.length; index++) {
            const routerItem = routerData[index]
            if (routerItem.path === targetPath) {
                result = parent
                break
            }
            if (routerItem.children && routerItem.children.length) {
                result = this.getrouter(targetPath, routerItem.children, result, routerItem)
            }
        }
        console.log(result)
        return result
    }

    // 渲染面包屑
    renderBreadcrumb = (data = [], activeKey) => {
        if(data instanceof Array) return <Breadcrumb.Item key={"/"} href="/">首页</Breadcrumb.Item>
        const breadcrumbList = [
            <Breadcrumb.Item key={"/"} href="/">首页</Breadcrumb.Item>,
            <Breadcrumb.Item key={data.path} >{data.name}</Breadcrumb.Item>
        ]
        const find = data.children.find(item => item.path === activeKey)
        breadcrumbList.push(<Breadcrumb.Item key={find.path} >{find.name}</Breadcrumb.Item>)
        return breadcrumbList
    }

    render() {
        const { activeKey = null } = this.props

        return (
            <Header style={{ background: '#fff', padding: "0px 10px", height: 55 }}>
                <CommonCard style={{ padding: 5, marginBottom: 10 }}>
                    <Breadcrumb  >
                        {activeKey ? this.renderBreadcrumb(this.getrouter(activeKey, routerData, [], []), activeKey) : <Breadcrumb.Item key={"/"} href="/">首页</Breadcrumb.Item>}
                    </Breadcrumb>
                </CommonCard>
            </Header>
        )
    }
}

