// const router =  require('express').Router();
// let Feedback = require('../models/Feedback');
// const nodemailer = require("nodemailer");

// // Get all feedbacks
// router.route('/').get((req, res) => {
//     Feedback.find()
//         .then(feedbacks => res.json(feedbacks))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// //feedback count
// router.route("/getFeedbackCount").get(async (req,res)=>{
//     Feedback.find().then((feedbacks)=>{ 
//       let counts = 0;
  
//       feedbacks.forEach((item) => {
       
//         counts++;
//       });
//         res.json(counts)
      
//   }).catch((err)=>{
//       console.log(err)
//   })
//   })

// // Add a feedback
// router.route('/add').post((req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;

//     const newFeedback = new Feedback({
//         name, 
//         email, 
//         message
//     });

//     newFeedback.save()
//         .then(() => res.json('Feedback added!'))
//         .catch(err => res.status(400).json('Error: ' + err));

//     // // Send email to admin
//     // const transporter = nodemailer.createTransport({
//     //     host: 'smtp.zoho.com',
//     //     port: 465,
//     //     secure: true,
//     //     auth: {
//     //         user: 'sansalu@zohomail.com',
//     //         pass: 'Kusal@123'
//     //     },
//     // });

//     // const mailOptions = {
//     //     from: 'sansalu@zohomail.com',
//     //     to: `${req.body.email}`,
//     //     subject: `Hi ${req.body.name}, Thank You for your Feedback!`,
//     //     text: message,
//     // };

//     // transporter.sendMail(mailOptions, (error, info) => {
//     //     if (error) {
//     //         console.log(error);
//     //     } else {
//     //         console.log(`Email sent: ${info.response}`);
//     //     }
//     // });
// });

// // Get a feedback by id
// router.route('/:id').get((req, res) => {
//     Feedback.findById(req.params.id)
//         .then(feedback => res.json(feedback))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// // Delete a feedback by id
// // router.route('delete/:id').delete((req, res) => {
// //     Feedback.findByIdAndDelete(req.params.id)
// //         .then(() => res.json('Feedback deleted.'))
// //         .catch(err => res.status(400).json('Error: ' + err));
// // });

// // Delete a feedback by id
// router.route('/delete/:id').delete((req, res) => {
//     Feedback.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Feedback deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });



// //respond to the user from admin
// router.route('/respond/:id').post((req, res) => {
//     Feedback.findById(req.params.id)
//         .then(feedback => {

//             feedback.respond = req.body.respond;

//             feedback.save()
//                 .then(() => res.json('Feedback responded!'))
//                 .catch(err => res.status(400).json('Error: ' + err));

//             // Send email to user
//             const transporter = nodemailer.createTransport({
//                 host: 'smtp.zoho.com',
//                 port: 465,
//                 secure: true,
//                 auth: {
//                     user: 'sansalu@zohomail.com',
//                     pass: 'Kusal@123'
//                 },
//             });   
            
//             const mailOptions = {
//                 from: 'sansalu@zohomail.com',
//                 to: `${req.body.email}`,
//                 subject: `Thank You for your Feedback!`,
//                 text:  `We will get back to you soon and here is our response: ${req.body.respond}`,
//             };
        
//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log(`Email sent: ${info.response}`);
//                 }
//             });
//         });   
// });

// module.exports = router;


//poornaka
const router = require('express').Router();
const Feedback = require('../models/Feedback');
const nodemailer = require("nodemailer");

// Get all feedbacks
router.route('/').get((req, res) => {
    Feedback.find()
        .then(feedbacks => res.json(feedbacks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a feedback
router.route('/add').post((req, res) => {
    const { name, email, message } = req.body;

    const newFeedback = new Feedback({
        name,
        email,
        message
    });

    newFeedback.save()
        .then(() => res.json('Feedback added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a feedback by id
router.route('/:id').get((req, res) => {
    Feedback.findById(req.params.id)
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a feedback by id
router.route('/delete/:id').delete((req, res) => {
    Feedback.findByIdAndDelete(req.params.id)
        .then(() => res.json('Feedback deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Respond to the user from admin
router.route('/respond/:id').post(async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);

        if (!feedback) {
            return res.status(404).json('Feedback not found.');
        }

        feedback.respond = req.body.respond;
        await feedback.save();

        // Send email to user
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: 'sansalu@zohomail.com',
                pass: 'Kusal@123'
            },
        });

        const mailOptions = {
            from: 'sansalu@zohomail.com',
            to: `${feedback.email}`,
            subject: `Thank You for your Feedback!`,
            text: `We will get back to you soon and here is our response: ${req.body.respond}`,
        };

        await transporter.sendMail(mailOptions);

        res.json('Feedback responded and email sent to user.');
    } catch (error) {
        console.error('Error responding to feedback:', error);
        res.status(500).json('Error responding to feedback. Please try again later.');
    }
});

// Add a reply to the feedback
router.route('/reply/:id').post(async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);

        if (!feedback) {
            return res.status(404).json('Feedback not found.');
        }

        const reply = req.body.reply;

        feedback.replies.push(reply);
        await feedback.save();

        res.json('Reply added to feedback.');
    } catch (error) {
        console.error('Error adding reply to feedback:', error);
        res.status(500).json('Error adding reply to feedback. Please try again later.');
    }
});


//feedback count
router.route("/getFeedbackCount").get(async (req,res)=>{
    try {
        const feedbackCount = await Feedback.countDocuments();
        res.json(feedbackCount);
    } catch (error) {
        console.log('Error fetching feedback count:', error);
        res.status(500).json('Error fetching feedback count');
    }
});

module.exports = router;
