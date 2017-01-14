var mysql = require('../database/mysql');

exports.insertNotice = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'insert into board (title,name,createAt,content,pwd) values(?,?,now(),?,?)'

        var params = [param.title,param.name,param.text,param.pwd];

      return  conn.query(query,params);
    }).then(function(result){
      console.log(result);
      param.soc.emit("insertNotice",{message:"등록 되었습니다."});

}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}


exports.getNotice = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from board'

        var params = [];

      return  conn.query(query,params);
    }).then(function(result){

      param.soc.emit("notice",result);

}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}

exports.getAdminNotice = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from masternotice'

        var params = [];

      return  conn.query(query,params);
    }).then(function(result){

      param.soc.emit("admin_notice",result);

}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}
