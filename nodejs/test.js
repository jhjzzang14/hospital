var mysql = require('./database/mysql');


exports.getTest = function(req,res){
  var id = req.query.id;
  var pwd = req.query.pwd;

  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from admin where id=? and pwd = ?'

        var params = [id,pwd];

      return  conn.query(query,params);
    }).then(function(result){

      if (result.length === 0) res.send( {message:'로그인 실패'});

      if (result.length ===1) {
        if(result[0].code===1){
          res.send({data:result , code:'1'})
        }
        if(result[0].code===2){
          res.send({code:'2',dept_no:result[0].dept_no })
        }
      }

}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });

}
