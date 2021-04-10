import React,{useState} from "react"
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css"

var SignUp = function(){
    const history= useHistory();
     const [name,setName]=useState("")
     const [password,setPassword]=useState("")
     const [email,setEmail]=useState("")

       const PostData =function(){
 
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
          return
      }
       fetch('/signup',{
        method:"post",
        headers:{

          "Content-Type":"application/json"
        },
          body:JSON.stringify({
             name,
             password,
             email

          })

        }).then((res)=>res.json())
        .then((data)=>{

          if(data.error){ 
          M.toast({html: data.error,classes:"#e53935 red darken-1"})
            
          }
         
          else{

            M.toast({html:data.message,classes:"#43a047 green darken-1"})
            history.push("/signin")

          }


          }).catch((err)=>{

            console.log(err);
             
          }) 


       }


return (
    <div className="mycard">
    <div className="card auth-card">
     
   <h4 style={{ fontFamily: "Billabong, sans-serif"}}>SignUp</h4>
   <h6 style={{ color: "gray"}}><b>Sign up to see photos and videos from your friends.</b></h6>
   <input 
   type="text" placeholder="Name" value={name} onChange={(e)=>{
   setName(e.target.value)    
   }}></input>
   <input 
   type="text"  placeholder="Email"
   value={email} onChange={(e)=>{
    setEmail(e.target.value)    
    }}></input>
   <input 
   type="text" placeholder="Password"
   value={password} onChange={(e)=>{
    setPassword(e.target.value)    
    }}></input>
   <button className="btn waves-effect waves-light  #2196f3 blue" type="submit" name="action" onClick={()=>{PostData()}}>SignUp
    <i className="material-icons right"></i>
  </button>
  
  <h6>Already Have an account ?  <Link to="/signin" className="signupbtn">Log In</Link> 

 </h6>
      </div>
      </div>
)}



export default SignUp;