
TODO app using node.js mongoDb express;

 install node mongo

 set view engine ejs with view in  /views folder.it contains home.ejs.(dynamic html) 
set db using mongoose in config/mongoose.It connects to todo_list_db
 Model folder have todo schema.
 
 routes contains varios routes-
    if '/' it will acces home controller , which will search task in db and load
    if /create task request comes via form, It will create task in db 
    if delete using delete(trash) icon it will call deleteController and delete that particular task
    if delete using checkbox + delete tasks button> It add checked value array in home.js file of assets .There it trverse through array and delete tasks using link which send one by one id to deleteController.

