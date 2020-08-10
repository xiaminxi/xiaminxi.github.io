/*
 * @Author: 夏民喜
 * @Date: 2020-08-05 21:40:42
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-09 16:34:02
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\pages\SystemManage\ProductConfig\List.js
 */
import React, { Component, Fragment } from 'react'
import { Button, Table, Card, Form, Input } from 'antd'
import CommonTable from '../../Component/CommonTable'
import CommonCard from '../../Component/CommonCard'
const FormItem = Form.Item

const data = [
    { age: 18, userName: "夏夏", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "春春", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "秋秋", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "冬冬", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "花花", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "雪雪", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
    { age: 18, userName: "叶叶", xiongwei: 96, yaowei: 76, tunwei: 86 },
]
export default class List extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props)

        this.state = {
            templateData: data,
            dataSource: data
        }
    }
    onFinish = values => {
        const { templateData = [] } = this.state
        this.setState({ dataSource: values.userName ? templateData.filter(item => item.userName === values.userName) : templateData })
        console.log(values)
    }

    resetFields = () => {
        this.formRef.current.resetFields();
    }

    render() {
        const { onFinish } = this
        const { dataSource = [] } = this.state

        console.log(this.props)
        const columns = [
            { title: "年龄", dataIndex: "age", key: "age" },
            { title: "昵称", dataIndex: "userName", key: "userName", render: text => <Button size="small" type="primary">测试</Button> },
            { title: "胸围", dataIndex: "xiongwei", key: "xiongwei" },
            { title: "腰围", dataIndex: "yaowei", key: "yaowei" },
            { title: "臀围", dataIndex: "tunwei", key: "tunwei" },
        ]


        return (
            <Fragment>
                <CommonCard>
                    <Form layout="inline" ref={this.formRef} onFinish={onFinish}>
                        <Form.Item label="姓名" name="userName"  >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="button" onClick={this.resetFields}>重置</Button>
                            <Button style={{ margin: "0px 10px" }} type="primary" htmlType="submit" >查询</Button>
                        </Form.Item>
                    </Form>
                </CommonCard>

                <CommonTable dataSource={dataSource} columns={columns} />
            </Fragment>
        )
    }
}
