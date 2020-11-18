/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 20:53:27
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-11 23:50:28
 * @Description: 页面布局文件
 */
import React, { Component } from 'react'
import { Layout, Tabs, Row, Col } from 'antd';
import SiderMenu from './Component/SiderMenu';
import CommonHeader from './Component/CommonHeader';
import { createBrowserHistory } from 'history'
import { routerData } from '../routes/routerConfig';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cao from './Component/Themes';
// import { HashRouter as Router, Route} from 'react-router-dom'
const browserHistory = createBrowserHistory()
// const HashHistory = createHashHistory()

const { Footer, Content } = Layout
const { TabPane } = Tabs;

export default class BaseLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            TabPaneList: []
        }

        console.log(JSON.parse(localStorage.getItem("tabpaneList")))
    }

    componentDidMount() {
        this.initPage()
    }

    // 初始化页面
    initPage = () => {
        const currentHistory = JSON.parse(localStorage.getItem("currentHistory") || "{}")
        if (currentHistory.path) {
            this.insertTabPane(currentHistory)

            if (!window.location.href.includes(currentHistory.path)) {
                window.location.href = currentHistory.path
            }
            console.log(window.location.href)
        }
    }

    // 点击关闭标签页
    deleteTabPane = (targetKey, action) => this[action](targetKey);

    // 关闭标签页
    remove = targetKey => {
        let { TabPaneList = [], activeKey } = this.state
        const TabPaneListResult = TabPaneList.filter(item => item.key !== targetKey)
        let item = null
        if (targetKey === activeKey && TabPaneListResult.length > 0) {
            item = TabPaneListResult[TabPaneListResult.length - 1]
        } else {
            item = TabPaneListResult.length > 0 ? TabPaneListResult.find(item => item.key === activeKey) : { title: "首页", key: "/" }
        }
        // () => this.setState({ TabPaneList: this.changeActive(activeKey) })
        this.setState({ TabPaneList: TabPaneListResult }, () => console.log(this.props))
    }

    // 切换标签页
    onChangeTabPane = activeKey => {
        localStorage.setItem("currentHistory", JSON.stringify({ path: activeKey }))
        this.setState({ activeKey, TabPaneList: this.changeActive(activeKey) });
    }

    // 改变活动指示器
    changeActive = (targetKey) => {
        const { TabPaneList = [] } = this.state
        return TabPaneList.map(item => {
            if (item.key === targetKey) {
                item.tab = <Link style={{ color: localStorage.getItem("theme") || "#1890ff" }} to={item.key} >{item.title}</Link>
            } else {
                item.tab = <Link style={{ color: "black" }} to={item.key} >{item.title}</Link>
            }
            return item
        })

    }

    // 插入标签页
    insertTabPane = (item) => {
        const { TabPaneList = [] } = this.state
        const findRouterItem = this.getTabPane(item.path, routerData)
        let existenceFlag = undefined
        if (TabPaneList.length) {
            existenceFlag = TabPaneList.find(item => item.key === findRouterItem.path)
        }

        if (existenceFlag !== undefined) {
            this.setState({ activeKey: findRouterItem.path, TabPaneList: this.changeActive(findRouterItem.path) })
            return false
        } else {
            TabPaneList.push({
                key: findRouterItem.path,
                title: findRouterItem.name,
                tab: <Link to={findRouterItem.path} >{findRouterItem.name}</Link>,
                route: <Route exact path={findRouterItem.path} component={findRouterItem.component} />
            })
            console.log(TabPaneList)
            this.setState({ TabPaneList: this.changeActive(findRouterItem.path), activeKey: findRouterItem.path })
        }
        console.log(findRouterItem, 3333333333333)
        localStorage.setItem("currentHistory", JSON.stringify({ path: findRouterItem.path }))
    }

    // 匹配左侧菜单路由
    getTabPane = (targetPath, routerData) => {
        let findRouterItem = {}
        for (let index = 0; index < routerData.length; index++) {
            const routerItem = routerData[index]
            if (routerItem.path === targetPath) {
                findRouterItem = routerItem
                break
            } else {
                if (routerItem.children && routerItem.children.length) {
                    findRouterItem = this.getTabPane(targetPath, routerItem.children)
                    if (Object.keys(findRouterItem).length > 0) {
                        return findRouterItem
                    }
                }
            }
        }
        return findRouterItem
    }

    render() {
        const { activeKey = "", TabPaneList = [] } = this.state
        console.log(activeKey, TabPaneList)
        return (
            <Router history={browserHistory}  >
                <Layout style={{ width: "100%" }}>
                    <SiderMenu onMenuItemClick={this.insertTabPane} />
                    <Layout>
                        <CommonHeader activeKey={activeKey} />
                        <Content className="scroll-container">
                            <Tabs activeKey={activeKey} type="editable-card" hideAdd={true} onEdit={this.deleteTabPane} onChange={this.onChangeTabPane}>
                                {TabPaneList.map(item => <TabPane tab={item.tab} key={item.key} > {item.route}  </TabPane>)}
                            </Tabs>
                        </Content>
                        {/* <Cao/> */}
                        <Footer style={{ textAlign: 'center', background: '#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>

        )
    }
}