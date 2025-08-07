
function Reservation() {
    return (
           <section className="reservation" id="reservation">
        <h2>Make a Reservation</h2>
        <form action="">
            <input type="text" placeholder="Full Name" id=""/>

            <input type="email" placeholder="Email Address" id=""/>

            <input type="date" name="" id=""/>

            <input type="time" name="" id=""/>
            
            <input type="number" placeholder="Guest" min="1" id=""/>

            <button className="btn" type="submit">Book Now!</button>
        </form>
    </section>
       
    );
}

export default Reservation;