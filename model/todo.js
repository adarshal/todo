const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    description: {
     type: String,
     required:true
    },
    category: {
    type: String,
    required: true
    },
    dueDate:{
        type: String
    // required: true

            },
    isChecked:{
        type : Boolean,
        default:false
    }
  });

  const Todo=mongoose.model('Todo',TodoSchema);
//This is coolection, collection contain docs,docs contains fields like name,date. collectn name start capital
module.exports =Todo;


