// const mongoose = require("mongoose");

// const schema = mongoose.Schema;

// const feedbackSchema = new schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     message: {
//         type: String,
//         required: true,
//     },
// }, {
//     timestamps: true,
// });

// const Feedback = mongoose.model("Feedback", feedbackSchema);
// module.exports = Feedback;



const mongoose = require("mongoose");

const schema = mongoose.Schema;

const feedbackSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    },
    replies: [
        {
            type: String,
            required: true,
        }
    ]
}, {
    timestamps: true,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
