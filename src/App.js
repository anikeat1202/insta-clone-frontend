import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from "./components/Navbar"
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from "react-router-dom"
import Profile from "./components/screens/Profile"
import Signup from "./components/screens/Signup"
import Home from "./components/screens/Home"
import SignIN from './components/screens/Login';
import CreatePost from "./components/screens/CreatePost"
import {reducer,initalState} from "./reducers/userreducer"



export const UserContext= createContext()


const Routing = function(){

  const {state,dispatch} = useContext(UserContext)
  const history= useHistory()

  useEffect(()=>{

    const user=JSON.parse(localStorage.getItem("user"))
   
    
    if(user){
      dispatch({type:"USER",payload:user})
      history.push("/")

    }

    else{
      history.push("/signin")
    }


  },[])


  return (
    <Switch>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="/signin">
    <SignIN></SignIN>
    </Route>
    <Route path="/signup">
    <Signup></Signup>
    </Route>
    <Route path="/profile">
    <Profile></Profile>
    </Route>
    <Route path="/CreatePost">
      <CreatePost></CreatePost>
    </Route>
    </Switch>


  

  )}


var App= function() {

const [state,dispatch] = useReducer(reducer,initalState)


  return ( 
     <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
       <Navbar></Navbar>
     <Routing></Routing>
       </BrowserRouter>
       </UserContext.Provider>
    
  );
}

export default App;
