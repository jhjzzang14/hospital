
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var testApi = require('./test');
var PatientSearch = require('./PatientSearch');
var PatientDel = require('./PatientDel');
var reservation = require('./Reservation');
var PatientInsert = require('./PatientInsert');
var getSelect = require('./Select');
var prescription = require('./Prescription');
var Patient = require('./Patient');
var PatientUpdate = require('./PatientUpdate');
var schedule = require('./schedule');
//android socket 통신
var Login = require('./login');
var notice = require('./Notice');
var user_prescription = require('./mobile/prescription');
var user_notice = require('./mobile/notice');
var client_user = require('./mobile/user');
var app = express();

//test.js 호출

app.get('/',function(req,res){
  console.log('test');
  res.sendFile(__dirname+'/app/index.html');
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.get('/test',testApi.getTest);
app.get('/PatientSearch',PatientSearch.getPatient);
app.get('/reservation',reservation.getReservation);
app.get('/selectReservation',reservation.selectReservation);
app.get('/PatientDel',PatientDel.getPatient);
app.post('/PatientInsert',PatientInsert.getPatientInsert);
app.get('/getSelect',getSelect.getSelect);
app.get('/prescription',prescription.getPrescription);
app.post('/Patient',Patient.Patient);
app.get('/getPatient',Patient.getPatient);
app.post('/insertPrescription',prescription.insertPrescription);
app.get('/getPatientInfo',prescription.getPatientInfo);
app.post('/PatientUpdate',PatientUpdate.PatientUpdate);
app.get('/PrescriptionSearch',prescription.PrescriptionSearch);
app.get('/getNotice',notice.getNotice);
app.get('/getMasterNotice',notice.getMasterNotice);

app.post('/updateNotice',notice.updateNotice);
app.post('/insertNotice',notice.insertNotice);

app.get('/deleteNotice',notice.deleteNotice);

app.get('/getschedule',schedule.getSchedule);
app.post('/insertSchedule',schedule.insertSchedule);
app.post('/user_comment',notice.insertComment);
var server = app.listen(8000,function(req,res){
  console.log('load Success');
});
var io = require('socket.io').listen(server);
io.on('connection', function(socket){
  console.log(socket.id);

  socket.on("data",function(data){
    var jsonContent = JSON.parse(data);
    console.log(jsonContent.id+" "+jsonContent.pwd);
    Login.Login({user_id:jsonContent.id,user_pwd:jsonContent.pwd,soc:io});
});
  socket.on("notice",function(){
    user_notice.getNotice({soc:io});
  });

  socket.on("insertNotice",function(param){
    user_notice.insertNotice({title:param.title,pwd:param.pwd,text:param.text,name:param.name,soc:io});
  });

  socket.on("getPrescription",function(param){
    user_prescription.getPrescription({name:param.name,soc:io});
  });

  socket.on("id_search",function(param){
    client_user.getId({id:param,soc:io});
  });

  socket.on("insertUser",function(param){
    client_user.insertUserInfo({param:param,soc:io});
  });

  socket.on("id_found",function(param){
    client_user.idFound({param:param,soc:io});
  });

  socket.on("admin_notice",function(){
    user_notice.getAdminNotice({soc:io});
  });
 });
