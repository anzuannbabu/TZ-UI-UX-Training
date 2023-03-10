var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var multer = require('multer');//Step 1
var path = require('path');

app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*"); 
    return next();
});

app.use(express.static(__dirname ));//Step 2

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

var con = {
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"practice1"
};


var connection;
function handleDisconnect() {
    connection = mysql.createConnection(con);
    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }  
        else
        {
            console.log("i got it");
        }                                   // to avoid a hot loop, and to allow our node script to
    });
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

//Step 3: Configure multer
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) { //Default folder config
        cb(null, __dirname+'/uploads');
    },
    filename: function (req, file, cb) {
        //Attach timestamp beside file name
        var datetimestamp = Date.now();
        cb(null, file.originalname.replace(
            path.extname(file.originalname)) 
        + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');
/*API path that will upload the files */    
app.post('/upload', function(req, res) {
    console.log('hi');
    console.log(req.body);
    upload(req,res,function(err){
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        //res.json({error_code:0,err_desc:null});
        res.json({"filename":"uploads/"+req.file.filename});
        //console.log(req.file);
    });
});
app.get('/getAllCourses',function(req,res){
    var querystring = "select * from courses" ; 
    console.log("query::" +querystring)
    connection.query(querystring,function(err,results){
        if(err)
        {
            throw err;
        }
        else
        {          
            console.log(results);
            res.json(results);
        }
    });
});
app.post('/newbook',function(req, res){
    console.log(req.body);
    var sqlList = "Insert into books(bookname,author,price) values("+
                    "'" + req.body.bookname + "','" + req.body.author + "'," +req.body.price+ ")";
    console.log(sqlList);
    var query = connection.query(sqlList,function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result.insertId);
            res.json(result);
        }
    });
});
app.get('/getAllProducts',function(req,res){
    var querystring = "select * from products" ; 
    console.log("query::" +querystring)
    connection.query(querystring,function(err,results){
        if(err)
        {
            throw err;
        }
        else
        {          
            console.log(results);
            res.json(results);
        }
    });
});
app.get('/getProduct/:productid',function(req,res){
    var querystring = "select productname,vendor,unitprice from products where productid="+req.params.productid ; 
    console.log("query::" +querystring)
    connection.query(querystring,function(err,results){
        if(err)
        {
            throw err;
        }
        else
        {          
            console.log(results);
            res.json(results);
        }
    });
});
app.post('/newcategory',function(req, res){
    console.log(req.body);
    var sqlList = "Insert into categories(cetegoryname) values("+
                    "'" + req.body.categoryname + "')";
    console.log(sqlList);
    var query = connection.query(sqlList,function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result.insertId);
            res.json(result);
        }
    });
});
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})