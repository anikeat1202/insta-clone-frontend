import React from 'react';
import Navbar from "./components/Navbar"
import "./App.css"
import {BrowserRouter,Route} from "react-router-dom"
import Profile from "./components/screens/Profile"
import Signup from "./components/screens/Signup"
import Home from "./components/screens/Home"
import SignIN from './components/screens/Login';


var App= function() {
  return ( 
  
        <BrowserRouter>
       <Navbar></Navbar>
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
       </BrowserRouter>
    
  );
}

export default App;
