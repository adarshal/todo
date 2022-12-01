//TODO node.js

const express=require('express');
const port=8080;
const path=require('path'); //dont need to npm install path it comes with nodejs. here req because it needed for ejs
const ejs=require('ejs');
const app=express();



app.use(express.urlencoded());  // need for parsing it is middleware
app.use(express.static('assets'));



//uses router
app.use('/',require('./routes')); // /router/index.js can also used but it directly fect index so used it

//ejs
app.set('view engine','ejs');
app.set('views','./views');


//database
const db=require('./config/mongoose');
const Todo=require('./model/todo');







//Starts server
app.listen(port,function(err){

    if(err){
        console.log('Error in starting server '+err);
        return;
    }
    console.log('Server is up and running on '+port);

})