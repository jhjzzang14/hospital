var mysql = require('./database/mysql');

exports.getPrescription = function(req,res,socket){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from prescription where name=?'

        var params = [req.query.patient_name];

        console.log(req.query.patient_name);
      return  conn.query(query,params);
    }).then(function(result){

      res.send({data: result});

}).catch(function(err){
  res.send({message:'Err'});
}).finally(function () {
    if (conn) {
    conn.connection.release();
    }
});
}

exports.getPatientInfo = function(req,res,socket){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from patient where patient_no = ?';
        var params = [req.query.patient_no];

      return  conn.query(query,params);
    }).then(function(result){

      res.send({data: result});

}).catch(function(err){
  res.send({message:'Err'});
}).finally(function () {
    if (conn) {
    conn.connection.release();
    }
});
}

exports.PrescriptionSearch = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from prescription where prescription_no = ?';
        var params = [req.query.prescription_no];

      return  conn.query(query,params);
    }).then(function(result){
      console.log(result);
      res.send({data: result});

}).catch(function(err){
  res.send({message:'Err'});
}).finally(function () {
    if (conn) {
    conn.connection.release();
    }
});
}

exports.insertPrescription = function(req,res,socket){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from patient where name = ? and birthday = ? '

        var params = [req.query.patient_name,req.query.patient_birthDay];

      return  conn.query(query,params);
    }).then(function(result){

      var query = 'insert into prescription (patient_no,name,ContentType0,ContentType1,ContentType2,ContentType3,ContentType4,patient_Usage,createAt,doctor)'+
      'select ?,?,?,?,?,?,?,?,now(),dept_name from department where dept_no = ?'

      var params = [result[0].patient_no,result[0].name,req.query.ContentsType0,req.query.ContentsType1,req.query.ContentsType2,req.query.ContentsType3,req.query.ContentsType4,req.query.patient_Usage,req.query.dept_no];

      return conn.query(query,params);
}).then(function(result){

    res.send({message:'success'});

    var query = 'select * from prescription';

    var params = [req.query.patient_name,req.query.patient_birthDay];

    conn.query(query,params);

}).then(function(result){

  var query = 'delete from transpatient where patient_name = ? and patient_birthDay=?';

  var params = [req.query.patient_name,req.query.patient_birthDay];

  conn.query(query,params);

}).catch(function(err){
  res.send({err:'Err'});
}).finally(function () {
    if (conn) {
    conn.connection.release();
    }
});
}
