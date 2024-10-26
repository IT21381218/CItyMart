const router = require("express").Router();
let Product = require("../models/Product");

// router.route("/add").post((req,res) => {  
   
//     const product_id =  req.body.product_id; 
//     const product_name = req.body.product_name; 
//     const availabe_quantity = Number(req.body.availabe_quantity);
//     const unit_price = parseFloat(req.body.unit_price);

//     const newProduct = new Product({ 
//       product_id,
//       product_name,
//       availabe_quantity,
//       unit_price
//     })

   
//     newProduct.save().then(()=>{ 
//         res.json("Product Added") 
//     }).catch((err)=>{ 
//         console.log(err); 
//     })
// })

router.route("/").get((req,res) =>{

    Product.find().then((products)=>{ 
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/count").get((req, res) => {
  const data = []; 
  const counts = {
    vegetables: 0,
    fruits: 0,
    beverages: 0,
    chilled: 0,
    meatandfish: 0,
    grocery: 0,
  };

  data.forEach((item) => {
    const category = item.category_type;
    if (category in counts) {
      counts[category]++;
    }
  });

  res.json(counts);
});


router.post("/add", async (req, res) => {
    const { category_type, product_id, product_name, availabe_quantity, unit_price } = req.body;
  
    try {
      // Check if a product with the same product_id already exists in the database
      const existingProduct = await Product.findOne({ product_id });
  
      if (existingProduct) {
        return res.status(400).json({ message: "Product with this product_id already exists." });
      }
  
      // If the product doesn't exist, create a new one and save it to the database
      const newProduct = new Product({
        category_type,
        product_id,
        product_name,
        availabe_quantity,
        unit_price,
      });
  
      await newProduct.save();
  
      return res.status(200).json({ message: "Product added successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  
router.route("/update/:id").put(async(req,res)=>{

    let productId = req.params.id;

    const {product_id,product_name,availabe_quantity,unit_price} = req.body;

    const updateProduct = { 
        product_id,  
        product_name,
        availabe_quantity,
        unit_price
    }

    const update  = await Product.findByIdAndUpdate(productId, updateProduct).then(()=>{  
      res.status(200).send({status: "Product updated"})   
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message}); 
    })
});

router.route("/delete/:id").delete(async(req,res)=> {
    
    let productId = req.params.id;

    await Product.findByIdAndDelete(productId)
    .then(()=>{
        res.status(200).send({status:"Product Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:" Error with deleting Product", error:err.message});
    })
})


router.route("/get/:id").get(async (req,res)=>{

    let productId = req.params.id;

    const product = await Product.findById(productId) 
    .then((product)=>{  
        res.status(200).send({status:"Product Fetched", product});
    }).catch(()=>{
        res.status(500).send({status:" Error with getting product", error:err.message}); 
    })
})

// router.route("/getProductCount").get(async (req,res)=>{
//   Product.find().then((products)=>{ 
//     let counts = 0;

//     products.forEach((item) => {
//       const qty = parseInt(item.product_name);
//       counts += qty;
//     });
//       res.json(counts)
//     // res.json(products)
// }).catch((err)=>{
//     console.log(err)
// })
// })

router.route("/getProductCount").get(async (req,res)=>{
  Product.find().then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})

//vegetable count
router.route("/vegetables/Count").get(async (req,res)=>{
  Product.find({category_type : 'vegetables'}).then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})

//fruit count
router.route("/fruits/Count").get(async (req,res)=>{
  Product.find({category_type : 'fruits'}).then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})

//beverage count
router.route("/beverages/Count").get(async (req,res)=>{
  Product.find({category_type : 'beverages'}).then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})

//chilled count
router.route("/chilled/Count").get(async (req,res)=>{
  Product.find({category_type : 'chilled'}).then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})

//meatandfish count
router.route("/meatandfish/Count").get(async (req,res)=>{
  Product.find({category_type : 'meatandfish'}).then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})

//grocery count
router.route("/grocery/Count").get(async (req,res)=>{
  Product.find({category_type : 'grocery'}).then((products)=>{ 
    let counts = 0;

    products.forEach((item) => {
     
      counts++;
    });
      res.json(counts)
    // res.json(products)
}).catch((err)=>{
    console.log(err)
})
})


router.route("/search/:key").get(async (req, res) => {
  try {
    const key = req.params.key;
    
    const myquery = { product_id: { $regex: key, $options: 'i' } };

    const result = await Product.find(myquery).exec();

    res.json(result);
  } catch (error) {
    console.error('Error while searching for products:', error.message);
    
    res.status(500).json({ error: 'An error occurred while searching for products' });
  }
});


module.exports = router;