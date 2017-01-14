var mysql = require('./database/mysql');

exports.getPatientInsert= function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'insert into patient (name,gender,birthDay,address,tel,createdate,last) values (?,?,?,?,?,now(),now())';

        var params = [req.query.name,req.query.gender,req.query.FbirthDay+'-'+req.query.LbirthDay,req.query.address,req.query.Ftel+'-'+
                      req.query.Mtel+'-'+req.query.Ltel];

      return  conn.query(query,params);
    }).then(function(result){

      res.send({message:'입력 완료'});

}).catch(function(error){
  res.send({err : '다시 입력해주세요'});
}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}
