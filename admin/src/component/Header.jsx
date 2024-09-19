import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Header.css";
import "./Css/Logo.css";
// import { useNavigate } from "react-router-dom";
// import Logo from "./asets/Logo.png";
import Cookies from "universal-cookie";
// import { IoIosSearch } from "react-icons/io";
function Header() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const user = cookies.get("user");

  const logout = () => {
    cookies.remove("user");
    window.location.href = "/home";
  };
  
  return (
    <div>
      {user ? (
        <ul className=" Header">
          <li> 
            <Link to="/logo">
              {" "}
              <div>
                <a>Student</a>
                {/* <img className=" Logo" src={Logo} alt="My Image" /> */}
              </div>
            </Link>
          </li>
          <div>
            {/* <input
              type="text"
              className=" Search_Producte"
              placeholder="  Search for Producte , Brands and More!"
            /> */}
          </div>
          <div className=" Header_Name">
            <li>
              <Link to="/AddProducte">Add Producte </Link>
            </li>
            <li>
              <Link to="/ShowProducte">Show Product</Link>
            </li>

            <li>
              <Link onClick={logout} to="/login">
                Logout  
              </Link>
            </li>
          </div>
        </ul>
      ) : (
        <div className="h-16 shadow-md 	 text-color:red ">
          <div className="">
            <ul className=" Header">
              <li>
                <Link to="/logo">
                  {" "}
                  <div className="logo">
                    <a>Student</a>
                    {/* <img className=" Logo" src={Logo} alt="My Image" /> */}
                  </div>
                </Link>
              </li>
              <div>
                {/* <input
                  type="text"
                  className=" Search_Producte"
                  placeholder="  Search for Producte , Brands and More!"
                /> */}
              </div>
              <div className=" Header_Name">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contacte</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
