import React , {useEffect, useState}from "react";
import axios from "axios";
import SidebarCategory from "./SidebarCategory";
import vegetablesimg from './images/vegetables.png';
import fruitsimg from './images/fruits.png';
import meatandfishimg from './images/meatandfish.png';
import groceryimg from './images/grocery.png';
import chilledimg from './images/chilled.png';
import beveragesimg from './images/beverages.png';


function Category(){

    const [vegetableCount, setVegetableCount] = useState(0);
    const [fruitCount, setFruitCount] = useState(0);
    const [beverageCount, setBeverageCount] = useState(0);
    const [chilledCount, setChilledCount] = useState(0);
    const [meatandfishCount, setMeatandfishCount] = useState(0);
    const [groceryCount, setGroceryCount] = useState(0);

    useEffect(() => {
        // Fetch the count of items for each category
        fetchCategoryCount('vegetables', setVegetableCount);
        fetchCategoryCount('fruits', setFruitCount);
        fetchCategoryCount('beverages', setBeverageCount);
        fetchCategoryCount('chilled', setChilledCount);
        fetchCategoryCount('meatandfish', setMeatandfishCount);
        fetchCategoryCount('grocery', setGroceryCount);
      }, []);
    
      const fetchCategoryCount = (category, setCount) => {
        console.log(category) ;
        axios.get(`http://localhost:5000/product/${category}/Count`)
          .then((response) => {
            setCount(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(`Error fetching ${category} count: ` + error);
          });
      };


    return(
        <div>
            <SidebarCategory/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
            <h1> CATEGORIES </h1>
            <hr/>
            
            <div className="row" style={{marginTop: '100px'}}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="column">
                            <a href="/vegetables" style ={{ textDecoration: 'none'}}>
                                <img src={vegetablesimg} alt="categories" style={{ width: '50%' , padding: '2px 2px'}} />  
                                <figcaption style={{ color: '#000000'}}> Vegetables </figcaption>
                                <div className="dashname" style={{ background: '#00c400', height: '20%', fontWeight: "bold", color: "#ffffff" }}><b>{vegetableCount}</b></div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/meatandfish" style ={{ textDecoration: 'none'}}>
                            <img src={meatandfishimg} alt="categories" style={{ width: '50%' , padding: '2px 2px'}} />  
                                <figcaption style={{ color: '#000000' }}> Meat & Fish </figcaption>
                                <div className="dashname" style={{ background: '#00c400', height: '20%', fontWeight: "bold", color: "#ffffff" }}><b>{meatandfishCount}</b></div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/chilled" style ={{ textDecoration: 'none'}}>
                            <img src={chilledimg} alt="categories" style={{ width: '50%' , padding: '2px 2px'}} />  
                                <figcaption style={{ color: '#000000'}}> Chilled </figcaption>
                                <div className="dashname" style={{ background: '#00c400', height: '20%', fontWeight: "bold", color: "#ffffff" }}><b>{chilledCount}</b></div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: '100px'}}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="column">
                            <a href="/fruits" style ={{ textDecoration: 'none'}}>
                            <img src={fruitsimg} alt="categories" style={{ width: '50%' , padding: '2px 2px'}} />  
                                <figcaption style={{ color: '#000000'}}> Fruits </figcaption>
                                <div className="dashname" style={{ background: '#00c400', height: '20%', fontWeight: "bold", color: "#ffffff" }}><b>{fruitCount}</b></div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/grocery" style ={{ textDecoration: 'none'}}>
                            <img src={groceryimg} alt="categories" style={{ width: '50%' , padding: '2px 2px'}} />  
                                <figcaption style={{ color: '#000000'}}> Grocery </figcaption>
                                <div className="dashname" style={{ background: '#00c400', height: '20%', fontWeight: "bold", color: "#ffffff" }}><b>{groceryCount}</b></div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/beverages" style ={{ textDecoration: 'none'}}>
                            <img src={beveragesimg} alt="categories" style={{ width: '50%' , padding: '2px 2px'}} />  
                                <figcaption style={{ color: '#000000'}}> Beverages </figcaption>
                                <div className="dashname" style={{ background: '#00c400', height: '20%', fontWeight: "bold", color: "#ffffff" }}><b>{beverageCount}</b></div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category;