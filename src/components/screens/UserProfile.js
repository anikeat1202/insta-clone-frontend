import React,{useEffect,useState,useContext} from "react"
import {UserContext} from "../../App"
import {useParams} from "react-router-dom"


var Profile = function(){

const {state,dispatch} = useContext(UserContext)
const [userProfile,setProfile] = useState(null)

const {userid} = useParams();
const [showFollow,setShowFollow] = useState(state?!state.following.includes(userid):true)

console.log(userid);


useEffect(()=>{
    fetch(`/user/${userid}`,{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{


        console.log(result)
        setProfile(result)
      
    })
 },[])


 const unfollow= function(){

   fetch("/unfollow",
   {  
    method:"put",
    headers:{
  "Content-Type":"application/json",
   Authorization:"Bearer "+localStorage.getItem("jwt")
    },
    
    body:JSON.stringify({
     unfollowId:userid
    })

   }).then(res=>res.json())
   .then(result=>{
   console.log(result);

    dispatch({type:"UPDATE",payload:{following:result.following,followers:result.followers}})
    localStorage.setItem("user",JSON.stringify(result))
    
    setProfile((prevState)=>{

        const newFollower=prevState.user.followers.filter(item=>{
            return item !==result._id
        })
 

    return {
        ...prevState,
        user:{
            ...prevState.user,
            followers:newFollower
        }
    }
  
}
   )

   setShowFollow(true)

   }).catch(err=>{


    console.log(err);

   })



 }
 const follow= function(){

    fetch("/follow",
    {  
     method:"put",
     headers:{
   "Content-Type":"application/json",
   
    Authorization:"Bearer "+localStorage.getItem("jwt")
 
     },
     
     body:JSON.stringify({
      followId:userid
     })
 
    }).then(res=>res.json())
    .then(result=>{
    console.log(result);
     dispatch({type:"UPDATE",payload:{following:result.following,followers:result.followers}})
     localStorage.setItem("user",JSON.stringify(result))
     setProfile((prevState)=>{
  
 
     return {
         ...prevState,
         user:{
             ...prevState.user,
             followers:[...prevState.user.followers,result._id]
         }
     }
   
 }
    )

    setShowFollow(false)

 
    }).catch(err=>{
 
 
     console.log(err);
 
    })
 
 
 
  }

return (
<>

{ userProfile ?
    <div style={{maxWidth:"950px",margin:"0px auto"}}>

<div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
<div>
    <img style={{width: "160px",height:"160px",borderRadius:"80px"}} src={userProfile.user.pic}></img>
</div>
<div>
 <h4>{userProfile.user.name}</h4>
 <h4>{userProfile.user.email}</h4>

 <div style={{display:"flex",justifyContent:"space-around",width:"108%"}}>
     <h5>{userProfile.post.length} posts</h5>
     <h5>{userProfile.user.followers.length} followers</h5>
     <h5>{userProfile.user.following.length} following</h5>
</div>
{showFollow ?
     <button style={{margin:"10px"}} className="btn waves-effect waves-light  #2196f3 blue" type="submit" name="action" onClick={()=>follow()}>Follow
     <i class="material-icons right"></i>
   </button>
: 
<button style={{margin:"10px"}} className="btn waves-effect waves-light  #2196f3 blue" type="submit" name="action" onClick={()=>unfollow()}>UnFollow
    <i class="material-icons right"></i>
  </button>
}
  
 </div>

</div>




 <div className="gallery">
     { userProfile.post.map(item=>{

return <img key={item._id} className="item" src={item.photo} alt={item.title}></img>


})

       
       }


     
     


 </div>

</div>



: <h2>loading</h2>

}

</>
)}




export default Profile;