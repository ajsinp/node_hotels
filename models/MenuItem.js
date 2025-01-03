const mongoose = require('mongoose');


const menuIteamSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true,
    },
    price : {
        type : Number,
        required : true,
    },
    taste : {
        type : String,
        enum : ['Sweet', 'Spicy', 'Sour'],
        required : true,
    },
    is_drink : {
        type : Boolean,
        default : false
    },
    ingredidents : {
        type : [String],
        default : []
    },
    no_sales : {
        type : Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MenuItem,',menuIteamSchema);

module.exports = MenuItem;