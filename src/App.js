import React, { useEffect, createContext, useReducer, useContext } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import SignIN from "./components/screens/Login";
import CreatePost from "./components/screens/CreatePost";
import { reducer, initalState } from "./reducers/userreducer";
import UserProfile from "../src/components/screens/UserProfile";
import SubscribedUserPost from "../src/components/screens/SubscribedUserPost";

export const UserContext = createContext();

const Routing = function () {
  const { dispatch } = useContext(UserContext);
  const history = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("user>>>", user);
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history("/signin");
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIN />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route exact path="/profile" element={<Profile />}></Route>
      <Route path="/CreatePost" element={<CreatePost />}></Route>
      <Route path="/profile/:userid" element={<UserProfile />}></Route>
      <Route path="/myfollowingposts" element={<SubscribedUserPost />}></Route>
    </Routes>
  );
};

var App = function () {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routing></Routing>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
