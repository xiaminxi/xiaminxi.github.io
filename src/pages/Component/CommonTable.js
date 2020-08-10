/*
 * @Author: 夏民喜
 * @Date: 2020-08-07 16:51:23
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-10 13:41:40
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'antd'

export default class CommonTable extends Component {
    static propTypes = {
        dataSource: PropTypes.array.isRequired,
        columns: PropTypes.array.isRequired,
        bordered: PropTypes.bool,
        rowKey: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { dataSource = [], columns=[] } = this.props


        return (
            <Table title={(currentPageData) => {
                console.log(currentPageData)
                return <div>
                    <Button type="danger" >删除</Button>
                    <Button type="primary" >新增</Button>
                    <Button type="primary" >编辑</Button>
                </div>
            }} columns={columns} dataSource={dataSource} bordered rowKey={(record, index) => index}  size="middle" />
        )
    }
}

