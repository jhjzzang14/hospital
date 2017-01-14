var mysql = require('./database/mysql');


exports.Login = function(data,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from user where id=? and pwd = ?'

        var params = [data.user_id,data.user_pwd];

      return  conn.query(query,params);
    }).then(function(result){
    //  console.log(result);
          //console.log(result);
          data.soc.emit("result",result);
        //  console.log(result);

}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });

}
