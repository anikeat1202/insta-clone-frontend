import React from "react"
import {Link} from "react-router-dom"


var Navbar= function(){


    return (

  
<nav>
    <div className="nav-wrapper white" style={{color:"white"}}>
      <Link to="#" className="brand-logo" style={{ fontFamily: "Billabong, sans-serif"}}>Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  </nav>


    )


}



export default Navbar