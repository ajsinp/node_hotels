const express = require('express');
const router = express.Router();

const Person = require('./../models/person');
router.post('/', async (req, res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();

        console.log('data saved')
        res.status(200).json(response)
    }
    catch(err){
            console.log(err);
            res.status(500).json({err: 'Internal Server error'})
    }
})

router.get('/', async (req, res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal Server error'})
    }
})


router.get('/:workType', async(req, res) =>{
    try{
        const workType = req.params.workType;
    if(workType =='chef' || workType == 'manager' ||workType == 'waiter'){
        const response = await Person.find({work : workType});
        console.log("Response fetched");
        res.status(200).json(response);
    }else{
        res.status(404).json({error :'Invalid Work type'});
    }
    }catch(err){
        console.log(err);
            res.status(500).json({err: 'Internal Server error'})
    }
});

// update code for person

router.put('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;
        const updatedPersonId = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonId,{
            new : true,
            runValidators : true
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data update');
        res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(404).json({error:"Person not found"})
    }
    
})

router.delete('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            console.log("Person not Found");
        }
        else{
            console.log("Data Deleted");

            res.status(200).json({message: 'Person deleted sucessfully'});
        }


    }
    catch(err){
        console.log(err);
        res.status(404).json({error : 'Internal Server Error'});
    }
})

module.exports = router;