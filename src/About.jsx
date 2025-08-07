import chef from './assets/chef.jpg';

function About() {
    return (
           <section className="about" id="about">
        <div className="container">
            <div className="about-text">
                <h2>About Us</h2>
                <p>At TasteBuds, we blend the rich flavours of African heritage with modern culinary techniques. Our Chef-curated meals celebrate culture, creativity and the freshest ingredients.</p>
            </div>
                        <img src={chef} alt="Head-Chef"/>
        </div>
    </section>
       
    );
}

export default About;