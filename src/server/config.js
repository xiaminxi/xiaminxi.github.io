/*
 * @Author: 夏民喜
 * @Date: 2020-08-27 16:02:37
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-08-27 16:05:55
 * @Description: 请求地址配置文件
 */
// 配置请求地址
const HTTP = {
    // 开发地址
    dev: 'http://test-api.manage.rent.work/',
    dev: 'http://112.74.44.15:8104/',
    // dev: 'http://192.168.1.155:8104/',
    // 测试地址
    test: 'http://test-api.manage.rent.work/',
    // 生产地址
    prod: 'http://api.manage.rent.work/',
};
export const HTTP_BASE_URL = HTTP[NODE_ENV]