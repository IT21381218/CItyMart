import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewAllProduct = () => {

    const [products , setProducts] = useState(null)
    const [deleteProduct, setDeleteProduct] = useState("");
    const [Search, setSearch] = useState("");


    useEffect(()=>{
        const showProduct = async ()=>{
            const response = await fetch('http://localhost:5000/product/')
            const json = await response.json()

            if(response.ok){
                setProducts(json)
            }
        }
        showProduct()
    }, [])

    const productDelete=async (id) => {
      try {
        await axios.delete(`http://localhost:5000/product/delete/${id}`);
        setDeleteProduct(products.filter((item) => item.id !== id));
        alert('Successfully deleted');
        window.location.reload(); 
        
      } catch (error) {
        alert('Error deleting data', error);
        console.log(error);
      }
    };
  

    return(
      <div style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '../back.jpg'})`, 
        backgroundSize: 'cover',
        minHeight: '91.75vh',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
        
        }}>
        <div className="container">
            <h1 id="t1"> Products </h1><br></br>
            <Link to='/addProduct' className='btn btn-success'>+ Add Product</Link><br></br><br></br>
        <form className="f1">
              <input type="text" placeholder=" Search Here " className="i1" onChange={(e)=> setSearch(e.target.value)}></input>
        </form>  
                <table class="table">
                <thead>
                  <tr>
                    {/* <th scope="col" id="t2">ID</th> */}
                    <th scope="col" id="t2">Product Number</th>
                    <th scope="col" id="t2">Product Name</th>
                    <th scope="col" id="t2">Availabe Quantity (Kg) </th>
                    <th scope="col" id="t2">Unit Price (Rs. per Kg)</th>
                  </tr>
                </thead>
                <tbody>
                {products && products.filter((product)=>{
                  return Search.toLowerCase() === ''
                  ? product
                  : product.product_name.toLowerCase().includes(Search);
                }).map((product)=>(
                  <tr>
                    {/* <th scope="row">{product._id}</th> */}
                    <td>{product.product_id}</td>
                    <td>{product.product_name}</td>
                    <td>{product.availabe_quantity}</td>
                    <td>{product.unit_price}</td>
                    <div class="d-grid gap-2 d-md-block">
                    <Link to={`/updateProduct/${product._id}`} className="btn btn-warning">Edit</Link>&nbsp;
                        <button class="btn btn-danger" onClick={()=>productDelete(product._id)}>Delete</button>
                    </div>
                  </tr>))}
                </tbody>
              </table>
            
        </div>
        </div>
    )
}

export default ViewAllProduct;