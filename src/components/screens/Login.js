import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import M from "materialize-css";
import { UserContext } from "../../App";

var SignIn = function () {
  const { state, dispatch } = useContext(UserContext);
  const history = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = function () {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }

    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          M.toast({ html: data.error, classes: "#e53935 red darken-1" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user)); //stringify is used becoz in local storage we can store data as string only

          dispatch({ type: "USER", payload: data.user });

          M.toast({
            html: "Signed In SuccessFully",
            classes: "#43a047 green darken-1",
          });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h4 style={{ fontFamily: "Billabong, sans-serif" }}>SignIn</h4>
        <input
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="btn waves-effect waves-light  #2196f3 blue"
          type="submit"
          name="action"
          onClick={() => PostData()}
        >
          Login
          <i class="material-icons right"></i>
        </button>
        <h6>
          Dont have an account?{" "}
          <Link to="/signup" className="signinbtn">
            Sign Up
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SignIn;
