const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const productSchema = new Schema({
    
    category_type :{
        type: String,
        required: true
    },
    
    product_id : {      
        type: String,
        required: true,
        
        unique: true, // Ensure that product_id is unique
        trim: true, // Remove leading/trailing whitespaces
        validate: {
            validator: async function (value) {
                // Check if a product with the same product_id already exists in the database
                const existingProduct = await this.constructor.findOne({ product_id: value });
                return !existingProduct;
            },
            message: 'Product with this product_id already exists.',
        },
        
    },

    product_name : {      
        type: String,
        required: true 
    },

    availabe_quantity : {
        type: Number,
        required: true
    },

    unit_price : {
        type: Number,
        required: true
    },

})

const Product = mongoose.model("Product" , productSchema)

module.exports = Product;