var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({     
  host     : '127.0.0.1',       //主机
  user     : 'root',               //MySQL认证用户名
  password : '1qaz!QAZ',        //MySQL认证用户密码
  port: '3306',                   //端口号
}); 

//执行SQL语句
connection.connect();
//查询
var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['钟慰', '5678',1];
//改
connection.query(userModSql,userModSql_Params,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});
//关闭连接
connection.end();