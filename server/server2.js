var express = require("express");
var app = express();

app.get('/', function(req,res){
    res.send("You have successfully created your second app!");
});

var Server = app.listen(2001, function (){
    var host = Server.address().address
    var port = Server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
    

       