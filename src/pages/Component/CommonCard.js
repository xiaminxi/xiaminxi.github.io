/*
 * @Author: 夏民喜
 * @Date: 2020-08-07 17:27:56
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-07 18:37:51
 * @Description: 请输入文件说明
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

function CommonCard(props) {
    return (
        <Card bodyStyle={{ padding: 5 }} style={props.style || { padding: 10, marginBottom: 10 }} >
            {props.children}
        </Card>
    )
}

CommonCard.propTypes = {

}

export default CommonCard

