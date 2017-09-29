const path = require('path');

module.exports = cabrdlycInfo => {

    const config = {};
    // 静态页面配置
    config.view = {
        
    };

    // 静态资源配置
    config.static = {
       
    };

    // 错误配置
    config.errorHandler = {
       
    };

   
    // 数据库连接
      config.sequelize = {
        host     : '127.0.0.1',       //主机
        user     : 'root',               //MySQL认证用户名
        password : '1qaz!QAZ',        //MySQL认证用户密码
        port: '3306',                   //端口号
        database:'nodeSample'
     };
  
    // 测试环境
    //  config.sequelize = {
    //    host     : '127.0.0.1',       //主机
    //    user     : 'root',               //MySQL认证用户名
    //    password : '1qaz!QAZ',        //MySQL认证用户密码
    //    port: '3306',                   //端口号
    //   database:'nodeSample'
    // };


    return config;
};