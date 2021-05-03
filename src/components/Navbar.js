import React,{useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import {UserContext} from "../App"

var Navbar= function(){


   const {state,dispatch}= useContext(UserContext);
const history= useHistory();
   const renderList =function(){

       if(state)
       {
         return [
          <li><Link to="/profile">My Profile</Link></li>,
          <li><Link to="/CreatePost">CreatePost</Link></li>,
          <li><Link to="/myfollowingposts">My Followings Posts</Link></li>,

<li>
          <button className="btn #c62828 red darken-3" type="submit" name="action" 
          onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
           history.push("/signin")
          }}>LogOut
          <i class="material-icons right"></i>
           </button>
    

          </li>
         ]
       }

       else{
return [
<li><Link to="/signin">Login</Link></li>,
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