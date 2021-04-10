import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {UserContext} from "../App"

var Navbar= function(){


   const {state,dispatch}= useContext(UserContext);

   const renderList =function(){

       if(state)
       {
         return [
          <li><Link to="/profile">My Profile</Link></li>,
          <li><Link to="/CreatePost">CreatePost</Link></li>


         ]
       }

       else{
return [<li><Link to="/signin">Login</Link></li>,
<li><Link to="/signup">Signup</Link></li>]


       }




   }


    return (

  
<nav>
    <div className="nav-wrapper white" style={{color:"white"}}>
      <Link to={state? "/": "signin"} className="brand-logo" style={{ fontFamily: "Billabong, sans-serif"}}>Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
         {renderList()}
      </ul>
    </div>
  </nav>


    )


}



export default Navbar