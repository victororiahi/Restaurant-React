

function Hero() {
    return (
        
               <section className="hero-slider">
        <div className="swiper">
            
            <div className="swiper-wrapper">

                
                <div className="swiper-slide slide" style="background-image: url('Assets/hero-dish1.webp');">
                    <div className="slide-content">
                        <h1>Experience the delightful taste of Africa</h1>
                        <p>A celebration of culture in every plate</p>
                    </div>
                </div>

               
                <div className="swiper-slide slide" style = "background-image: url('Assets/hero-dish2.webp');">
                    <div className="slide-content">
                        <h1>Make every meal special</h1>
                        <p>Where Afro-fusion meets fine dining</p>
                    </div>
                </div>

                
                <div className="swiper-slide slide" style="background-image: url('Assets/hero-dish3.jpg');">
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