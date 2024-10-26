import React, {useState} from "react";
import axios from "axios";
import SidebarAllCategory from "./SidebarAllCategory";

export default function AddProduct(){

    const [product_id, setProduct_id] = useState("");
    const [product_name, setProduct_name] = useState("");
    const [availabe_quantity, setAvailable_quantity] = useState(""); 
    const [unit_price, setUnit_price] = useState(""); 
    const [category_type, setCategory_type] = useState({category: ''});
    
    function sendData(e){
        e.preventDefault();

        // Client-side validation
        if (!category_type || !product_id || !product_name || !availabe_quantity || !unit_price) {
            alert("Please fill in all fields.");
            return;
        }

        const newproduct ={
            category_type,
            product_id,
            product_name,
            availabe_quantity,
            unit_price
        }
        axios
        .post("http://localhost:5000/product/add", newproduct)
        .then((response) => {
          if (response.status === 200) {
            alert("Product added successfully.");
            // Reset the form fields after successful submission
            setCategory_type("");
            setProduct_id("");
            setProduct_name("");
            setAvailable_quantity("");
            setUnit_price("");
            const categoryToUrl = {
                'grocery': '/grocery',
                'vegetables': '/vegetables',
                'fruits': '/fruits',
                'meatandfish': '/meatandfish',
                'chilled': '/chilled',
                'beverages': '/beverages',
              };
            
              const redirectUrl = categoryToUrl[category_type.category] || '/categories';
            
              window.location.href = redirectUrl;
          }
        })
        .catch((err) => {
          if (err.response.status === 400 && err.response.data.message === "Product with this product_id already exists.") {
            // Prompt a message when the product already exists
            alert("Product with this product_id already exists. Cannot insert.");
          } else {
            alert("Error: " + err.response.data.message);
          }
        });
    }

    return(
        <div>
            <SidebarAllCategory/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> ADD PRODUCT </h1>
                <hr/>
                <form action=" ">
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Category Type </b> </label>
                        <select id="category" class="form-control" name="category" value={category_type.category} onChange={(e)=>{
                            setCategory_type(e.target.value);
                        }} required>
                            <option value="">Select Category </option>
                            <option value="vegetables"> Vegetables </option>
                            <option value="fruits"> Fruits </option>
                            <option value="meatandfish"> Meat and Fish </option>
                            <option value="grocery"> Grocery </option>
                            <option value="chilled"> Chilled </option>
                            <option value="beverages"> Beverages </option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Product Id </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setProduct_id(e.target.value);
                        }} required />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" >  <b> Product Name </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setProduct_name(e.target.value);
                        }} required />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Available Quantity (KG/UNIT) </b> </label>
                        <input type="number" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setAvailable_quantity(e.target.value);
                        }} required />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Unit Price : Rs. </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setUnit_price(e.target.value);
                        }} required />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={sendData}> Add Product </button>
                </form>
            </div>
        </div>    
    )

}