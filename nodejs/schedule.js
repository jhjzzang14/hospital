var mysql = require('./database/mysql');

exports.getSchedule = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from schedule '

        var params = [req.query.start,req.query.end];

      return  conn.query(query,params);
    }).then(function(result){
        console.log(result);
        res.send({data:result});


}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}

exports.insertSchedule = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'insert into schedule values (?,?,?,?,?,?)'

        var params = [req.query.doctor_name,req.query.scheduleType,req.query.depart,req.query.content,req.query.Fdate,req.query.Ldate];

        console.log(params);
      return  conn.query(query,params);
    }).then(function(result){
        res.send({message:'등록 성공'});

}).catch(function(err){
        res.send({message:"등록 실패"});
}).finally(function () {
            if (conn) {
                conn.connection.release();
            }
        });
}
