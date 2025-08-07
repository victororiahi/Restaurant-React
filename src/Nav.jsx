function Nav (){
    return(
      
<nav className="navbar">

        <div className="nav-container">
        
            <div className="logo">TasteBuds</div>
        <ul className="nav-menu">
            <li><a href="">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li className="menu-item-has-children">
                <a href="">Locations</a>
                <ul className="sub-menu">
                    <li><a href="">Lekki</a></li>
                    <li><a href="">Ikeja</a></li>
                    <li><a href="">Victoria Island</a></li>
                </ul>

            </li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
        </ul>


        </div>
        
    </nav>

    )
}

export default Nav;