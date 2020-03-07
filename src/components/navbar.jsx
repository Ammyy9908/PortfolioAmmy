import React from "react"
import NavLinks from "./nav_links"
const brand_name="Sumit";
const Navbar=()=>
{
    return <div className="navbar">
        <nav className="customnav">
    <div className="container">
      <a href="#/" className="brand-logo">{brand_name}</a>
      
      <ul className="right hide-on-med-and-down">
     <NavLinks/>
      </ul>
    </div>
  </nav>

  
    </div>
}

export default Navbar;