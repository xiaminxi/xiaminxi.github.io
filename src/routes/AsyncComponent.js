/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 22:36:49
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-11-11 10:42:57
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\routes\AsyncComponent.js
 */
import React, { Component } from "react";

const AsyncComponent = (title, importComponent) => {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            console.log(title)
            window.document.title = title
            const { default: component } = await importComponent();
            window.title =
                this.setState({ component: component });
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}

const getComponent = (title, path) => AsyncComponent(title, () => import(`../pages${path}`));
export default getComponent