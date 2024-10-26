// const express = require ("express");
// const mongoose = require ("mongoose");
// const bodyParser = require ("body-parser");
// const cors = require ("cors");
// const dotenv = require ("dotenv");
// const app = express();
// require("dotenv").config();

// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
   
// });

// const connection = mongoose.connection;
// connection.once ("open" , () => {
//     console.log("Mongodb Connection success!");
// })

// const productRouter = require("./routes/products.js"); 
// app.use("/product",productRouter); 
// const staffRouter = require("./routes/staff.js");
// app.use("/staff",staffRouter);
// const feedbackRouter = require("./routes/feedbacks.js");
// app.use("/feedback",feedbackRouter);

// //poornaka
// const itemRoutes = require('./routes/item.js');
// app.use("/items", itemRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is up and running on port number: ${PORT}`)
// })


const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
});

const connection = mongoose.connection;
connection.once ("open" , () => {
    console.log("Mongodb Connection success!");
})

const productRouter = require("./routes/products.js"); 
app.use("/product",productRouter); 
const staffRouter = require("./routes/staff.js");
app.use("/staff",staffRouter);
const feedbackRouter = require("./routes/feedbacks.js");
app.use("/feedback",feedbackRouter);

//poornaka
const itemRoutes = require('./routes/item.js');
app.use("/items", itemRoutes);

const paymentRouter = require("./routes/payments.js");
app.use("/payment",paymentRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})


