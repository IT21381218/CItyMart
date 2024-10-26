import React, { useEffect } from 'react';
import { useItemsContext } from "./hooks/useItemsContext"; // Corrected import
import ItemDetails from './ItemDetails';
import ItemForm from './ItemForm';
import NavBar from './NavBar';
import MicNav from './MicNav';
import Footer from './Footer';
import './styles/custHome.css'

const CustHHome = () => {
    const { items, dispatch } = useItemsContext();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/items');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_ITEMS', payload: json });
                } else {
                    throw new Error(json.message);
                }
            } catch (error) {
                console.error('Error fetching items:', error.message);
            }
        };

        fetchItems();
    }, [dispatch]);

    return (
        <div className='Custhome'>
            <NavBar/>
            <MicNav/>
            <div className='home-container'>
                <ItemForm />
                <div className='workouts'>
                    {items && items.map((item) => (
                        <ItemDetails key={item._id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CustHHome;
