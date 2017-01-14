var mysql = require('./database/mysql');

exports.getPatient = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from patient where name=?'

        var params = [req.query.Patient];

        console.log(req.query.Patient);
      return  conn.query(query,params);
    }).then(function(result){

      if (result.length == 0) res.send( {message:'다시 입력하 시길 바랍니다'});
      else{
        res.send({data: result});
      }

}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}
