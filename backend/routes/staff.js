const router = require("express").Router();
let Staff = require("../models/Staff");
const nodemailer = require("nodemailer");

router.route("/").get((req,res) =>{

    Staff.find().then((staff)=>{ 
        res.json(staff)
    }).catch((err)=>{
        console.log(err)
    })
})

//staff count
router.route("/getStaffCount").get(async (req,res)=>{
    Staff.find().then((staff)=>{ 
      let counts = 0;
  
      staff.forEach((item) => {
       
        counts++;
      });
        res.json(counts)
  }).catch((err)=>{
      console.log(err)
  })
  })

router.post("/add", async (req, res) => {
    const { name, email, nic, age, gender, employee_type } = req.body;

    try {
        // Validate the incoming data
        if (!name || !email || !nic || !age || !gender || !employee_type) {
            return res.status(400).json({ message: "Please fill in all fields." });
        }

        // Check if a staff member with the same NIC already exists
        const existingNIC = await Staff.findOne({ nic });

        if (existingNIC) {
            return res.status(400).json({ message: "Staff member with this NIC already exists." });
        }

        // Create a new staff member
        const newStaff = new Staff({
            name,
            email,
            nic,
            age,
            gender,
            employee_type,
        });

        // Save the new staff member to the database
        await newStaff.save();

        // Send an email to the staff member
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user:'sansalu@zohomail.com',
                pass: 'Kusal@123'
            }
        });
        
        const mailOptions ={
            from: 'sansalu@zohomail.com',
            to: `${req.body.email}`,
            subject: 'Your Registration Completed',
            text: `Dear ${req.body.name}, \n\n Your registration has been completed successfully. \n\n Thank you. \n\n Regards, \n weShop Team`
        };

        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                console.log(error);
            } else {
                console.log('Email sent' + info.response);
            }
        })

        // Respond with a success message
        return res.status(200).json({ message: "Staff member added successfully." });
    } catch (error) {
        console.error(error);

        // Handle server errors and provide specific error messages
        return res.status(500).json({ message: "Internal server error" });
    }
});


router.route("/update/:id").put(async(req,res)=>{

    let staffId = req.params.id;

    const {name,
          email,
          nic,
          age,
          gender,
          employee_type} = req.body;

    const updateStaff = { 
        name,
        email,
        nic,
        age,
        gender,
        employee_type
    }

    const update  = await Staff.findByIdAndUpdate(staffId, updateStaff).then(()=>{  
      res.status(200).send({status: "Staff updated"})   
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message}); 
    })
});

router.route("/delete/:id").delete(async(req,res)=> {
    
    let staffId = req.params.id;

    await Staff.findByIdAndDelete(staffId)
    .then(()=>{
        res.status(200).send({status:"Staff Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:" Error with deleting Staff", error:err.message});
    })
});


router.route("/get/:id").get(async (req,res)=>{

    let staffId = req.params.id;

    const staff = await Staff.findById(staffId) 
    .then((staff)=>{  
        res.status(200).send({status:"Staff Fetched", staff});
    }).catch(()=>{
        res.status(500).send({status:" Error with getting Staff", error:err.message}); 
    })
})

module.exports = router;