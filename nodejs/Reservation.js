var mysql = require('./database/mysql');

exports.getReservation = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from reservation where reservationDate=? order by reservationTime'

        var params = [req.query.reservation];

        console.log(req.query.reservation);
      return  conn.query(query,params);
    }).then(function(result){

      if(result.length==0){
        res.send({message: '조회 된 데이터가 없습니다.'});
      }else {  res.send({data: result});}

    }).catch(function(){
      res.send({message:'날짜를 선택 해 주세요.'});
    }).finally(function () {
    if (conn) {
                conn.connection.release();
            }
        });
}

exports.selectReservation = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from reservation where reservationDate=? order by reservationTime'

        var params = [req.query.NowDate];

        console.log(params);
      return  conn.query(query,params);
    }).then(function(result){

      res.send({data:result});

    }).catch(function(){
      res.send({message:'날짜를 선택 해 주세요.'});
    }).finally(function () {
    if (conn) {
                conn.connection.release();
            }
        });
}
