const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentId : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    paymentType : {
        type : String
    },
    amount : {
        type : Number,
        required : true
    }
});

const payment = mongoose.model("payments" , paymentSchema);

module.exports = payment;