/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 20:50:19
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-10 14:04:20
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\routes\routerConfig.js
 */

import getComponent from "./AsyncComponent"

export const routerData = [
    {
        name: "系统管理",
        path: "SystemManage",
        auth: "xiaminxi",
        icon: "warning",
        children: [
            {
                name: "产品配置",
                path: "/SystemManage/ProductConfig/List",
                component: getComponent("SystemManage/ProductConfig/List")
            },
            {
                name: "项目配置",
                path: "/SystemManage/ProjectConfig/List",
                component: getComponent("SystemManage/ProjectConfig/List")
            },
            {
                name: "合同配置",
                path: "SystemManage/ContractConfig",
                children: [
                    {
                        name: "菜单配置",
                        path: "/SystemManage/ContractConfig/MenuManage/List",
                        component: getComponent("SystemManage/ContractConfig/MenuManage/List")
                    },
                    {
                        name: "模板配置",
                        path: "/SystemManage/ContractConfig/TemplateManage/List",
                        component: getComponent("SystemManage/ContractConfig/TemplateManage/List")
                    },
                ]
            },
        ]
    },
]
// 各位大佬， 有谁知道使用BrowserRouter 后出现内容不显示的问题吗
// 使用HashRouter 后就没有问题
// 两者表现是在地址栏中有没有#号
// BrowserRouter 没有#
// HashRouter 带#号
// 使用带#没有任何问题
// 现在就是用BrowserRouter 后出现内容不显示的问题, 页面刷新就404