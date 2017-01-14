var mysql = require('../database/mysql');

exports.getPrescription = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from prescription where name=?'

        var params = [param.name];

      return  conn.query(query,params);
    }).then(function(result){
      console.log(result);

        param.soc.emit("getPrescription",result);

}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}
