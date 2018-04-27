/**
 *@author jkwu
 *@date 2018/4/27
 *@desc 路由跳转，用于从mock数据服务器直接获取后端数据，返回给请求前端
 *@param mod
 *@return
 */
var redirect = {
  url: 'http://127.0.0.1:8080', //后端服务器地址
  path: [
    '/detailData',
  ]
};

module.exports = redirect;
