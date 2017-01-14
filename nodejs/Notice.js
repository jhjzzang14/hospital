var mysql = require('./database/mysql');

exports.getNotice = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from board'

        var params = [];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({data:result});
}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}

exports.getMasterNotice = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from masternotice'

        var params = [];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({data:result});
}).catch(function(error){

}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}


exports.insertNotice = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'insert into masternotice (title,name,createAt,content) values (?,"관리자",now(),?)'

        var params = [req.query.title,req.query.content];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({message:"등록 완료"});
}).catch(function(error){
    res.send({message:'둥록 실패'});
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });

}

exports.updateNotice = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'update masternotice set title=?,content=?,createAt=now() where no=?'

        var params = [req.query.title,req.query.content,req.query.no];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({message:"수정 완료"});
}).catch(function(error){
    res.send({message:'수정 실패'});
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}

exports.deleteNotice = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'delete from masternotice where no=?'

        var params = [req.query.no];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({message:"삭제 완료"});
}).catch(function(error){
    res.send({message:'삭제 실패'});
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });

}

exports.insertComment = function(req,res){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'update board set comment=? where no=?'

        var params = [req.query.comment,req.query.no];

      return  conn.query(query,params);
    }).then(function(result){
      res.send({message:"수정 완료"});
}).catch(function(error){
    res.send({message:'수정 실패'});
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });

}
