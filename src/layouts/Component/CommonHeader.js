/*
 * @Author: 夏民喜
 * @Date: 2019-09-06 03:40:21
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-27 22:05:10
 * @Description: 请输入文件描述
 */
import React, { Component } from 'react'
import { Layout, Menu, Form, Row, Col, Button, Card, Breadcrumb, Input, Avatar, Dropdown } from 'antd';
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

    /**
     * @description: 查找当前路由的所有父节点
     * @param {*} routerData 路由数据
     * @param {*} condition 查询条件
     * @param {*} result 返回结果
     * @return {Array}
     */
    getParent(routerData, condition, result = []) {
        if (!routerData) return []
        for (const data of routerData) {
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
            return <Breadcrumb.Item key={item.path} href={item.path} ><span style={{ color: localStorage.getItem("theme") || "#1890ff" }} >{item.name}</span></Breadcrumb.Item>
        }
    })

    render() {
        const { activeKey = null } = this.props
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header style={{ background: '#fff', padding: "0px 10px", height: 50 }}>
                <CommonCard bodyStyle={{ padding: 0 }} style={{ height: "100%", lineHeight: "50px" }}>
                    <Row>
                        <Col span={12} >
                            <Breadcrumb style={{ padding: 14 }} >
                                {this.renderBreadcrumb([{ name: "首页", path: "/" }, ...this.getParent(routerData, data => data.path === activeKey)])}
                            </Breadcrumb>
                        </Col>
                        <Col span={4}>
                            <Input.Search />
                        </Col>
                        <Col span={4}>
                            <div style={{textAlign: "center"}}>欢迎使用华兴金融服务系统</div>
                        </Col>
                        <Col span={4}>
                            <div >
                                <div style={{ float: "right", paddingRight: 20 }} >
                                    <Dropdown overlay={menu}>
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CommonCard>
            </Header>
        )
    }
}

