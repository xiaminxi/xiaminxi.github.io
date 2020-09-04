/*
 * @Author: 夏民喜
 * @Date: 2020-08-27 17:21:10
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-27 17:22:20
 * @Description: 请求接口管理文件
 */
import { API_GET } from "./request";

export const getMenuList = params => API_GET("/auth/querySysMenuList", params) 