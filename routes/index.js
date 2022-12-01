const express = require('express');
const router = express.Router()
console.log('Router loaded');

const Todo = require('../model/todo');

const homeController = require('../controllers/home_controller');
const deleteController = require('../controllers/taskDelete_Controller');
const deleteMultipleController = require('../controllers/deleteMultiple_Controller');
// const createTask=require('../controllers/createTask_Controller');

router.get('/', homeController.home);

//deleting using trashcan icon
router.get('/delete-task', deleteController.delete);
//deleting through checkbox
router.post('/delete-tasks-many',deleteMultipleController.delete);



router.post('/create-task', function (req, res) {

    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function (err, newTodo) {
        if (err) {
            console.log('Errror in creating task ', err);
            return;
        }
        //console.log('******',newTodo); //contact created
        return res.redirect('back');

    })


});


module.exports = router;