import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import SidebarAllCategory from "./SidebarAllCategory";

export default function UpdateProduct(){
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [product_id, setProduct_id] = useState("");
    const [product_name, setProduct_name] = useState("");
    const [availabe_quantity, setAvailable_quantity] = useState(""); 
    const [unit_price, setUnit_price] = useState(""); 
    const [category_type, setCategory_type] = useState('Initial Value');
    const params = useParams();
    const productId = params.id;

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/product/get/${productId}`)
                setProduct(res.data);
                console.log(res.data);
                setProduct_id(res.data.product_id);
                setProduct_name(res.data.product_name);
                setAvailable_quantity(res.data.availabe_quantity);
                setUnit_price(res.data.unit_price);
                setCategory_type(res.data.category_type);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [productId])

    function handleSubmit(e) {
        e.preventDefault();
        const updatedProduct = {
            product_id,
            category_type,
            product_name,
            availabe_quantity,
            unit_price
        }
        axios.put(`http://localhost:5000/product/update/${productId}`, updatedProduct)
            .then(() => {
                alert("Product updated");
                if (product.product.category_type === 'grocery') {
                    window.location.href = '/grocery';
                } else if (product.product.category_type === 'vegetables') {
                    window.location.href = '/vegetables';
                } else if (product.product.category_type === 'fruits') {
                    window.location.href = '/fruits';
                } else if (product.product.category_type === 'meatandfish') {  
                    window.location.href = '/meatandfish';
                } else if (product.product.category_type === 'chilled') {
                    window.location.href = '/chilled';
                } else if (product.product.category_type === 'beverages') {
                    window.location.href = '/beverages';
                } else{
                    window.location.href = '/categories';
                }
            })
            .catch((err) => {
                alert(err);
                });
        }

                return (

                    <div>
                        <SidebarAllCategory/>
                        <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                            <h1> UPDATE PRODUCT </h1>
                            <hr/>
                      
                        {loading ? (
                            <div>Loading...</div>

                        ) : (product && Object.keys(product).length !== 0 ? (

                            <form onSubmit={handleSubmit}>
                
                                <div class="mb-3">
                                <h5> Update <b style={{color:'red'}}>  {product.product.category_type} </b>  Category </h5>  
                                </div>
                
                                <div class="mb-3">
                                <label for="name2" class="form-label" > Product Id </label>
                                <input type="text" class="form-control" id="name2" placeholder={product.product.product_id}  
                                value={product.name2} onChange={(e)=> setProduct_id(e.target.value)}/>
                                </div>

                                <div class="mb-3">
                                <label for="name3" class="form-label" > Product Name </label>
                                <input type="text" class="form-control" id="name3" placeholder={product.product.product_name}  
                                value={product.name3} onChange={(e)=> setProduct_name(e.target.value)}/>
                                </div>

                                <div class="mb-3">
                                <label for="name4" class="form-label" > Available Quantity </label>
                                <input type="number" class="form-control" id="name4" placeholder={product.product.availabe_quantity}  
                                value={product.name4} onChange={(e)=> setAvailable_quantity(e.target.value)}/>
                                </div>

                                <div class="mb-3">
                                <label for="name5" class="form-label" > Unit Price : Rs.</label>
                                <input type="text" class="form-control" id="name5" placeholder={product.product.unit_price} 
                                value={product.name5} onChange={(e)=> setUnit_price(e.target.value)}/>
                                </div>
                
                                <button type="submit" className="btn btn-primary">Update</button>
                
                            </form>
                            ) : (
            <div>Loading...</div>
        ))}
            </div>
            </div>
)
}