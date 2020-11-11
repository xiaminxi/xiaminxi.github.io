/*
 * @Author: 夏民喜
 * @Date: 2019-09-06 03:40:21
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-11 13:37:03
 * @Description: 请输入文件描述
 */
import React, { Component } from 'react'
import { Layout, Menu, Form, Row, Col, Button, Card, Breadcrumb } from 'antd';
import { routerData } from '../../routes/routerConfig';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CommonCard from '../../pages/Component/CommonCard';


const { Header } = Layout;

export default class GlobalHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // 查找当前路由的所有父节点
    getParent(tree, condition, result = []) {
        if (!tree) return []
        for (const data of tree) {
            // 这里按照你的需求来存放最后返回的内容吧
            result.push(data)
            if (condition(data)) return result
            if (data.children) {
                const findChildren = this.getParent(data.children, condition, result)
                if (findChildren.length) return findChildren
            }
            result.pop()
        }
        return []
    }

    // 渲染面包屑
    renderBreadcrumb = (data) => data.map(item => {
        if (item.children) {
            return <Breadcrumb.Item key={item.path}  >{item.name}</Breadcrumb.Item>
        } else {
            return <Breadcrumb.Item key={item.path} href={item.path} >{item.name}</Breadcrumb.Item>
        }
    })

    render() {
        const { activeKey = null } = this.props

        return (
            <Header style={{ background: '#fff', padding: "0px 10px", height: 55 }}>
                <CommonCard style={{ padding: 5, height: "100%", lineHeight: "55px" }}>
                    <Breadcrumb  >
                        {this.renderBreadcrumb([{ name: "首页", path: "/" }, ...this.getParent(routerData, data => data.path === activeKey)])}
                    </Breadcrumb>
                </CommonCard>
            </Header>
        )
    }
}

