import { initScripts } from './scripts.js';
import { useEffect } from 'react';
import 'swiper/css';
import './styles.css';
import dish1 from './assets/dish1.webp';
import dish2 from './assets/dish2.webp';
import dish3 from './assets/dish3.jpg';

function Hero() {
    useEffect(() => {
        initScripts();
    }, []);
    return (
        
               <section className="hero-slider">
        <div className="swiper">
            
            <div className="swiper-wrapper">

                
                <div className="swiper-slide slide" style= {{backgroundImage: `url(${dish1})`}}>
                    <div className="slide-content">
                        <h1>Experience the delightful taste of Africa</h1>
                        <p>A celebration of culture in every plate</p>
                    </div>
                </div>

               
                <div className="swiper-slide slide" style = {{backgroundImage: `url(${dish2})`}}>
                    <div className="slide-content">
                        <h1>Make every meal special</h1>
                        <p>Where Afro-fusion meets fine dining</p>
                    </div>
                </div>

                
                <div className="swiper-slide slide" style= {{backgroundImage: `url(${dish3})`}}>
                    <div className="slide-content">
                        <h1>Taste the difference!</h1>
                        <p>From fire to flavour</p>

                        <div className="cta-buttons">
                            <a href="#reservation">Book now </a>
                            <a href="#menu">Explore Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        
  
    );
}

export default Hero;