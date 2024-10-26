import React from 'react';
import NavBar from '../components/NavBar';
import MicNav from './MicNav';
import './styles/MainHome.css';

const MainHome = () => {
    return (
        <div className="MainHome">
            <NavBar/>
            <video className="background-video" autoPlay loop muted>
                <source src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1714676694/citymart/xxx_animation_klhehw.mp4" type="video/mp4" />
                {/* Add additional sources for different video formats if needed */}
            </video>
            <div className="home-text">
                <h1>Welcome to CityMart</h1>
                <div className='textBorder'><p>We provide high-quality products and excellent service to our customers.</p></div>
                <button className='mainHomeBtn'>Explore More</button>
            </div>
        </div>
    );
};

export default MainHome;
