const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');


// We can sent the data to menu
router.post('/', async (req, res) => {
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();

        console.log('data saved')
        res.status(200).json(response)
    }
    catch(err){
            console.log(err);
            res.status(500).json({err: 'Internal Server error'})
    }
})

// fetch the using variabel

// We can read data from menu
router.get('/', async (req, res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal Server error'})
    }
})

router.get('/:tasteType', async(req, res) =>{
    try{
        const tasteType = req.params.tasteType;
    if(tasteType =='Sour' || tasteType == 'Spicy' || tasteType == 'Sweet'){
        const response = await MenuItem.find({taste : tasteType});
        console.log("Response fetched");
        res.status(200).json(response);
    }else{
        res.status(404).json({error :'Invalid Work type'});
    }
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal Server error'})
    }
})
module.exports = router;