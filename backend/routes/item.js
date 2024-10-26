// const express = require('express');
// const router = express.Router();

// const {
//     createWorkout,
//     getWorkouts,
//     getWorkout,
//     updateWorkout,
//     deleteWorkout
// }= require('../Controllers/workoutController')


// // GET all workouts
// router.get('/', getWorkouts);

// // GET single workout
// router.get('/:id', getWorkout);

// // POST a new workout
// router.post('/', createWorkout);

// // DELETE a workout
// router.delete('/:id', deleteWorkout);

// // Update a workout
// router.patch('/:id', updateWorkout);


// module.exports = router;


const express = require('express');
const router = express.Router();

const {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}= require('../Controllers/itemController')


// GET all items
router.get('/', getItems);

// GET single item
router.get('/:id', getItem);

// POST a new item
router.post('/', createItem);

// DELETE a item
router.delete('/:id', deleteItem);

// Update a item
router.patch('/:id', updateItem);


module.exports = router;
