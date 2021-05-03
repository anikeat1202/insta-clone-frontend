import React,{useEffect,useState,useContext} from "react"
import {UserContext} from "../../App"


var Profile = function(){

const {state,dispatch} = useContext(UserContext)

const [pics,setPic] = useState([]);


  useEffect(()=>{

   fetch("/myposts",{
      
    headers:{

       Authorization:"Bearer "+localStorage.getItem("jwt") 
         
    }


   }).then(res=>res.json())
   .then(result=>{
       console.log(result.myposts);
       setPic(result.myposts)
   })



  },[])


return (

<div style={{maxWidth:"700px",margin:"0px auto"}}>

  <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
  <div>
      <img style={{width: "160px",height:"160px",borderRadius:"80px"}} src={state?state.pic:"loading"}></img>

  </div>
  <div>
    
   <h4>{state?state.name:"loading"}</h4>
   <h5>{state?state.email:null}</h5>

   <div style={{display:"flex",justifyContent:"space-around",width:"108%"}}>

       <h5>{pics.length} posts</h5>
       <h5>{state?state.followers.length:"0"} followers</h5>
       <h5>{state?state.following.length:"0"} following</h5>

   </div>
</div>

  </div>




   <div className="gallery">
       {
         pics.map(item=>{

           return <img key={item._id} className="item" src={item.photo} alt={item.title}></img>


         })


       }
       


   </div>

</div>
)}



export default Profile;