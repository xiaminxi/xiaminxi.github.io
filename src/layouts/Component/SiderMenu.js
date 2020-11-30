/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 20:55:59
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-27 22:00:24
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\layouts\Component\SiderMenu.js
 */

import React, { Component } from 'react';
// import * as React from 'react';

import { Layout, Menu } from 'antd';
// import logo from '../../../public/logo192.png';
import { isUrl } from '../../utils/utils';
import { routerData } from '../../routes/routerConfig';
import { Link, NavLink, Route } from "react-router-dom"
// import Icon, { CodeFilled, SmileOutlined, SmileTwoTone } from '@ant-design/icons';
// import { createFromIconfontCN } from '@ant-design/icons';
// import { SmileOutline } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
const MenuItem = Menu.Item

export default class SiderMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    componentDidMount() {
       
    }

    // 展开收起菜单
    onCollapse = (collapsed, type) => this.setState({ collapsed: collapsed })

    // 打开收起菜单项
    onOpenChange = (keys) => {
        const { openMenuKeys = []} = this.state
        const latestOpenKey = keys.find(key => openMenuKeys.indexOf(key) === -1);
        this.setState({openMenuKeys: latestOpenKey ? keys.filter(item => latestOpenKey.indexOf(item) !== -1) :[]})
    }

    render() {
        const { collapsed, openMenuKeys = [] } = this.state;
        const { onMenuItemClick } = this.props

        // const IconFont = createFromIconfontCN({
        //     scriptUrl: [
        //       '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        //       '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        //     ],
        //   });

        const siderProps = {
            theme: "dark",
            collapsible: true,
            collapsed: collapsed,

            onCollapse: this.onCollapse,
        }

        const menuProps = {
            multiple: false,
            mode: "inline",
            // mode:"inline",
            theme:"dark",
            onOpenChange: this.onOpenChange,
            openKeys: openMenuKeys
        }

        const SubMenuProps = (item) => {
            return {
                key: item.path,
                title: item.icon ? item.name : item.name,
            }
        }


        const renderMenu = (data) => data.map(item => {
            if (item.children) {
                return <SubMenu {...SubMenuProps(item)}>{renderMenu(item.children)}</SubMenu>
            }
            return !item.hidden && <MenuItem key={item.path} onClick={() => onMenuItemClick(item)} ><Link to={item.path}>{item.name}</Link></MenuItem>
        });

        return (
            <Sider {...siderProps}>
                <Menu {...menuProps} >{renderMenu(routerData)}</Menu>
            </Sider>
        )
    }
}
