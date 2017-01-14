var mysql = require('./database/mysql');

exports.Patient = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from patient,department where patient_no = ? and dept_name = ?'

        var params = [req.query.patient_no,req.query.dept_name];

      return  conn.query(query,params);
    }).then(function(result){

      var query = 'insert into transpatient (patient_name,patient_birthDay,dept_no) values(?,?,?)'

      var params = [result[0].name,result[0].birthday,result[0].dept_no];

      return  conn.query(query,params);
}).then(function(result){

      res.send({message:'success'});

}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}


exports.getPatient = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from transPatient where dept_no = ?'

        var params = [req.query.dept_no];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({data:result});
    }).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}
