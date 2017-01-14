var mysql = require('./database/mysql');

exports.PatientUpdate= function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'update patient set name=?,gender=?,birthday=?,address=?,tel=? where patient_no = ?';

        var params = [req.query.name,req.query.gender,req.query.FbirthDay+'-'+req.query.LbirthDay,req.query.address,req.query.Ftel+'-'+
                      req.query.Mtel+'-'+req.query.Ltel,req.query.patient_no];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({message:'수정 완료'});

      var query = 'update prescription set name=? where patient_no = ?';

      var params = [req.query.name,req.query.patient_no];

      conn.query(query,params);

}).catch(function(error){
  res.send({err : '다시 입력해주세요'});
}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}
