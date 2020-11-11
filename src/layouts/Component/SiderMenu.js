/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 20:55:59
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-11 10:40:50
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

    render() {
        const { collapsed } = this.state;
        const { onMenuItemClick } = this.props

        // const IconFont = createFromIconfontCN({
        //     scriptUrl: [
        //       '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        //       '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        //     ],
        //   });

        const siderProps = {
            theme: "light",
            collapsible: true,
            collapsed: collapsed,
            onCollapse: this.collapse,
        }

        const menuProps = {
            mode: "inline",
            onOpenChange: this.expandMenu,
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
            return <MenuItem key={item.path} onClick={() => onMenuItemClick(item)} ><Link to={item.path}>{item.name}</Link></MenuItem>
        });

        return (
            <Sider {...siderProps}>
                <Menu {...menuProps} >{renderMenu(routerData)}</Menu>
            </Sider>
        )
    }
}
