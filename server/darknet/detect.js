var express = require('express')
var admin = require("firebase-admin");
var body_parser=require('body-parser');
var multer  = require('multer')
var path = require('path')

var storage = multer.diskStorage({
  destination : './mess_image',
  filename:function(req,file,cb){
    cb(null,'crowd.jpg')
  }
})

var upload = multer({
  storage: storage
}).single('file')

var url_encoded_parser=body_parser.urlencoded({extended:false})
var app=express()

var serviceAccount = require("./db_sec/pvtkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mess-f27d6.firebaseio.com"
});


const darknet = require('@moovel/yolo');
 var database = admin.database().ref()
 app.post('/image',function(req,res){
   res.send('Received')
   console.log(req.files)
   console.log('Aquiring Image...')
   upload(req,res,(err)=>{
     if(err){
       console.log("Error is: ",err)
     }
   })
   // console.log(req.body)

  darknet.detectImage({
  cfg: './cfg/yolo.cfg',
  weights: './yolo.weights',
  data: './cfg/coco.data',
  image: './mess_image/crowd.jpg',
  thresh: 0.24, // optional, default: 0.24
  hierThresh: 0.5, // optional, default: 0.5,
}, function(modified, original, detections, dimensions) {
  npersons=0
  detections.forEach(function(obj){
    if(obj.name == "person")
      npersons++
  })
  console.log(npersons)
  database.child('npersons').set(npersons)


});

 })

app.listen(3000)
console.log('listening on port 3000')