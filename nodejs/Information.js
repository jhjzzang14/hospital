var mysql = require('./database/mysql');


exports.Information = function(req,res){
  var id = req.query.id;
  var pwd = req.query.pwd;

  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from admin where id=?';

        var params = [req.query.id];

      return  conn.query(query,params);
    }).then(function(result){

      var query = 'select dept_name from department where dept_no = ?';

      var params = [result[0].dept_no];

      return conn.query(query,params);
}).then(function(result){


  res.send({data:result[0].dept_name});

}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });

}
