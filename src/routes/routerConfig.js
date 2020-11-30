/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 20:50:19
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-27 21:58:00
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\routes\routerConfig.js
 */

import getComponent from "./AsyncComponent"
const router = [
    {
        name: "首页",
        hidden: true,
        path: "HomePage/index",
    },
    {
        name: "产品页",
        path: "productManage",
        children: [
            {
                name: "模板配置",
                path: "productTemplate/index",
                icon: "eqwrwe",
            },
            {
                name: "合同配置",
                path: "productContcar/index",
                icon: "eqwrwe",
            },
        ]
    },
    {
        name: "找不到页面",
        path: "Result/404"
    },
    {
        name: "系统管理",
        path: "SystemManage",
        auth: "xiaminxi",
        icon: "warning",
        children: [
            {
                name: "产品配置",
                path: "ProductConfig/List",
                icon: "eqwrwe",
            },
            {
                name: "项目配置",
                path: "ProjectConfig",
                children: [
                    {
                        name: "项目配置-3",
                        path: "Contract/List"
                    },
                    {
                        name: "测试层级1",
                        path: "qwer",
                        children: [
                            {
                                name: "测试层级2",
                                path: "qwerq",
                                children: [
                                    {
                                        name: "到底了",
                                        path: "qwerqwer/List"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "合同配置",
                path: "ContractConfig",
                children: [
                    {
                        name: "菜单配置",
                        path: "MenuManage/List",
                    },
                    {
                        name: "模板配置",
                        path: "TemplateManage/List",
                    },
                ]
            },
        ]
    },
]

const generateRouterData = (data, parentPath = "/") => {
    return data.map(item => {
        let { path } = item
        path = parentPath + item.path

        let result = { ...item, path };
        if (item.children) {
            result.children = generateRouterData(item.children, `${parentPath}${item.path}/`, item.authority);
        } else {
            result = { ...result, component: getComponent(item.name, path), }
        }
        return result;
    })
}

export const routerData = generateRouterData(router)
console.log(routerData)
// export const getMenuData = () => formatter(router);
// console.log(getMenuData())


// 各位大佬， 有谁知道使用BrowserRouter 后出现内容不显示的问题吗
// 使用HashRouter 后就没有问题
// 两者表现是在地址栏中有没有#号
// BrowserRouter 没有#
// HashRouter 带#号
// 使用带#没有任何问题
// 现在就是用BrowserRouter 后出现内容不显示的问题, 页面刷新就404