/*
 * @Author: 夏民喜
 * @Date: 2020-08-07 16:51:23
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-07 16:56:31
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

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
            <Table columns={columns} dataSource={dataSource} bordered rowKey={(record, index) => index} />
        )
    }
}

