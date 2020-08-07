/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 22:36:49
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-07 16:09:51
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\routes\AsyncComponent.js
 */
import React, { Component } from "react";

const  asyncComponent = (importComponent) => {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({  component: component   });
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} />: null;
        }
    }

    return AsyncComponent;
}

const getComponent = type => asyncComponent(() => import(`../pages/${type}`));
export default   getComponent