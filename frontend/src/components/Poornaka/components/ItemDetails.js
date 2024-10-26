import React from "react";
import '../components/styles/details.css'

const ItemDetails = ({ item }) => {
    return (
        <div className="workout-details">
            <h4 className="title">{item.title}</h4>
            <div className="details">
                <p><strong>Quantity:</strong> <span className="quantity" style={{ color: 'black', fontWeight: 'bold' }}>{item.quantity}</span></p>
                <p className="created-at">Created At: {item.createdAt}</p>
            </div>
        </div>
    );
};

export default ItemDetails;
