const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type:String,
        requird: true
    },
    age : {
        type: Number
    },
    work :{
        type : String,
        enum : ['chef', 'waiter','manager'],
        requird : true
    },
    mobile : {
        type : Number,
        requird : true
    },
    email : {
        type : String,
        requird : true,
        
    },
    address : {
        type : String
    },
    salary : {
        type : Number,
        requird: true
    }
})

const Person = mongoose.model('Person',personSchema);

module.exports = Person;