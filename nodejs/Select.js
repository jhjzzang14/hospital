var mysql = require('./database/mysql');

exports.getSelect = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from department'

        var params = [];

      return  conn.query(query,params);
    }).then(function(result){

      res.send({data : result});

    }).finally(function () {
      if (conn) {
                    conn.connection.release();
                }
            });
}
