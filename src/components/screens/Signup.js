import React from "react"
import {Link} from "react-router-dom"


var SignIN = function(){

return (
    <div className="mycard">
    <div className="card auth-card">
     
   <h4 style={{ fontFamily: "Billabong, sans-serif"}}>SignUp</h4>
   <h6 style={{ color: "gray"}}><b>Sign up to see photos and videos from your friends.</b></h6>
   <input type="text" placeholder="Name"></input>
   <input type="text"  placeholder="Email"></input>
   <input type="text" placeholder="Password"></input>
   <button className="btn waves-effect waves-light  #2196f3 blue" type="submit" name="action">SignUp
    <i class="material-icons right"></i>
  </button>
  
  <h6>Already Have an account ?  <Link to="/signin" className="signupbtn">Log In</Link> 

 </h6>
      </div>
      </div>
)}



export default SignIN;