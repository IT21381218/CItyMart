const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({

    name :{
        type: String,
        required: true
    },

    email : { 
        type: String,
        required: true,
        unique: true, // Ensure that email is unique
        trim: true, // Remove leading/trailing whitespaces
        validate: {
            validator: async function (value) {
                // Check if a staff with the same email already exists in the database
                const existingStaff = await this.constructor.findOne({ email: value });
                return !existingStaff;
            },
            message: 'Staff with this email already exists.',
        },
    },

    nic : {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    employee_type:{
        type: String,
        required: true
    },

})

const Staff = mongoose.model("Staff" , staffSchema)

module.exports = Staff;