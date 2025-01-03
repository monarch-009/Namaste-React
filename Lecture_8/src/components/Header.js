import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  let btnName = "Login"; // Js Var

  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("Header Render");

  //If no dependency array => useEffect is called is called on every render 
  //If dependency array is empty = [] useEffect is called on initial render(just once)
  //If dependency array is [btnNameReact] => called everytime btnNameReact is updated 
  useEffect(() => {
    //console.log("useEffect Called")
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};


export default Header;