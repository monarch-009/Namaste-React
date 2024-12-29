import { useState } from "react";
const Header = () => {

  let btnName = "Login"; // Js Var

  const [btnNameReact,setBtnNameReact] = useState("Login"); // Spe
  
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{btnNameReact  === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")}}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};


export default Header;