import React from "react";
import "../Css/Login.css";
import { useState } from "react";
import Cookies from "universal-cookie";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const cookies = new Cookies();
  async function handlingLogin(e) {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/api/adminLogin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    
    if (result.status === 200) {
      result = await result.json();
      cookies.set("user", JSON.stringify(result.data));
        window.location.href = "/deshboard";
      console.log("hello");
    } else {
      // result=await result.json()

      setError("login failed");
      setInterval(() => {
        setError("");
      }, 5000);
    }
  }

  return (
    <div>
      <div class="wrapper">
        <div class="logo">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div class="text-center mt-4 name">Admin</div>
        <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="text"
              name="Email"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
              placeholder="Password"
            />
          </div>
          <button class="btn mt-3" onClick={handlingLogin}>
            Login
          </button>
        </form>
        <div class="text-center fs-6">
          <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
