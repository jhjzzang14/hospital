var mysql = require('../database/mysql');

exports.getId = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select count(*) as idcheck from user where id=?'

        var params = [param.id];

      return  conn.query(query,params);
    }).then(function(result){

      if(result[0].idcheck==1){
        param.soc.emit("id_search",{count:1,message:"이미 사용중인 아이디입니다."});
      }else if(result[0].idcheck==0)
      {
        param.soc.emit("id_search",{count:0,message:"사용 가능한 아이디입니다."});
      }

}).catch(function(error){
    console.log(error);
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}

exports.insertUserInfo = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'insert into user (name,id,pwd,address,birthday)  values(?,?,?,?,?)'

        var params = [param.param.name,param.param.id,param.param.pwd,param.param.address,param.param.birthday];

        console.log(params);
      return  conn.query(query,params);
    }).then(function(result){

        param.soc.emit("userInfo",{count:1,message:"회원 가입 성공"});
}).catch(function(error){
      param.soc.emit("userInfo",{count:0,message:"회원 가입 실패"});
}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}


exports.idFound = function(param){
  var conn;
  mysql.getConnection().
    then(function(connection){
        conn = connection;

        var query = 'select * from user where name =? and birthday=?'

        var params = [param.param.user_name,param.param.user_birthday];

      return  conn.query(query,params);
    }).then(function(result){
        if(result.length==1){
        param.soc.emit("id_found",{id:result[0].id,count:1 , message:"아이디를 이메일 보냈습니다."});
      }else if(result.length==0){
        param.soc.emit("id_found",{count:0 , message:"존재하지 않는 정보입니다."});
      }

}).catch(function(error){

}).finally(function () {
      if (conn) {
      conn.connection.release();
      }
    });
}
