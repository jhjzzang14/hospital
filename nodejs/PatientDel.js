var mysql = require('./database/mysql');

exports.getPatient = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'delete from patient where patient_no=?'

        var params = [req.query.param];

      return  conn.query(query,params);
    }).then(function(result){

      res.send({message:'삭제되었습니다'});
}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}
