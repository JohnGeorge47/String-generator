var express = require("express");
var app = express();

app.use('/api',require('./routes/api.js'));
app.listen(process.env.PORT || 3000,function(){
         console.log('Express running on port ' );

 });

