// const Workout = require('../models/workoutModel')
// const mongoose = require('mongoose')

// //get all workouts

// const getWorkouts = async (req, res) =>{
//     const workouts = await Workout.find({}).sort({createAt: -1})
//     res.status(200).json(workouts)
// }

// // get a single workout

// const getWorkout = async (req, res) =>{
//     const{id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such workout'})
//     }

//     const workout = await Workout.findById(id)

//     if (!workout){
//         return res.status(404).json({error: 'No such workout'})
//     }
//     res.status(200).json(workout)
// }

// // create new workout

// const createWorkout = async (req, res) =>{
//     const { title, load, reps } = req.body;

//     try {
//         const workout = await Workout.create({ title, load, reps });
//         res.status(200).json(workout);
//     } catch (error) {
//         res.status(400).json({ error: error.message }); // corrected typo encodeURIComponent.message to error.message
//     }
// }

// // delete a workout

// const deleteWorkout = async (req, res) =>{
//     const{id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such workout'})
//     }    

//     const workout = await Workout.findOneAndDelete({_id:id})

//     if (!workout){
//         return res.status(404).json({error: 'No such workout'})
//     }
//     res.status(200).json(workout)

// }

// //update a workout

// const updateWorkout = async (req,res) =>{
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such workout'})
//     } 

//     const workout = await Workout.findByIdAndUpdate({_id: id},{
//         ...req.body
//     })

//     if (!workout){
//         return res.status(404).json({error: 'No such workout'})
//     }
//     res.status(200).json(workout)

// }


// module.exports = {
//     createWorkout,
//     getWorkouts,
//     getWorkout,
//     deleteWorkout,
//     updateWorkout
// }


const Item = require('../models/itemModel')
const mongoose = require('mongoose')

//get all items

const getItems = async (req, res) =>{
    const items = await Item.find({}).sort({createAt: -1})
    res.status(200).json(items)
}

// get a single item

const getItem = async (req, res) =>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such item'})
    }

    const item = await Item.findById(id)

    if (!item){
        return res.status(404).json({error: 'No such item'})
    }
    res.status(200).json(item)
}

// create new item

const createItem= async (req, res) =>{
    const { title, quantity } = req.body;

    try {
        const item = await Item.create({ title, quantity });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message }); // corrected typo encodeURIComponent.message to error.message
    }
}

// delete a item

const deleteItem= async (req, res) =>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such item'})
    }    

    const item = await Item.findOneAndDelete({_id:id})

    if (!item){
        return res.status(404).json({error: 'No such item'})
    }
    res.status(200).json(item)

}

//update a item

const updateItem = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such item'})
    } 

    const item = await Item.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if (!item){
        return res.status(404).json({error: 'No such item'})
    }
    res.status(200).json(item)

}


module.exports = {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}