import React from "react"
import {Link} from "react-router-dom"

var SignIN = function(){

return (
    <div className="mycard">
    <div className="card auth-card">
     
   <h4 style={{ fontFamily: "Billabong, sans-serif"}}>SignIn</h4>
   <input type="text"  placeholder="Username or Email"></input>
   <input type="text" placeholder="Password"></input>
   <button className="btn waves-effect waves-light  #2196f3 blue" type="submit" name="action">Login
    <i class="material-icons right"></i>
  </button>
  <h6>Dont have an account?  <Link to="/signup" className="signinbtn">Sign Up</Link> 
</h6>
  
      </div>
      </div>
)}



export default SignIN;