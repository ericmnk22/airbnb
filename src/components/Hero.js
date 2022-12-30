import react from 'react';

export default function Hero(){
    return(
        <div className="Hero">
            <div className="hero-image-container">
                <img src="./airbnb-hero.png" className="Hero-Img"/>
            </div>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-description">
                Join unique interactive activities 
                led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}