var express = require('express');
var app = express();

app.get('/' , function (req, res){
    res.send('Hello there i m felix')
});

app.listen(3000, function () {
    console.log(" i'm here and i m working")
})