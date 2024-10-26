const router =  require('express').Router();
let Payment = require('../models/Payment');
const nodemailer = require("nodemailer");

//Get all payments
router.route('/').get((req, res) => {
    Payment.find()
        .then(payments => res.json(payments))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a Payment
router.route('/add').post((req, res) => {
    const paymentId = req.body.paymentId;
    const name = req.body.name;
    const description = req.body.description;
    const paymentType = req.body.paymentType;
    const amount = req.body.amount;

    const newPayment = new Payment({
        paymentId,
        name,
        description,
        paymentType,
        amount
    });

    newPayment.save()
        .then(() => res.json('Payment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Payment count
router.route("/getPaymentCount").get(async (req,res)=>{
    Payment.find().then((payment)=>{ 
      let counts = 0;
  
      payment.forEach((item) => {
        counts++;
      });
        res.json(counts)
  }).catch((err)=>{
      console.log(err)
  })
});

// Get a payment by id
router.route('/:id').get((req, res) => {
    Payment.findById(req.params.id)
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update payment
router.route("/update/:id").put(async(req,res)=>{
    let payId = req.params.id;

    const {paymentId, name, description, paymentType, amount} = req.body;

    const updatePayment = { 
        paymentId,
        name,
        description,
        paymentType,
        amount
    }

    const update  = await Payment.findByIdAndUpdate(payId, updatePayment).then(()=>{  
      res.status(200).send({status: "Payment updated"})   
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message}); 
    })
});

// Delete a payment by id
router.route('/delete/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Payment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;