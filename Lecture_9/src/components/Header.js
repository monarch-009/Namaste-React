import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

  let btnName = "Login"; // Js Var

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
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
          <li>{onlineStatus ? "🟢" : "⚫"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
        <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
      </ul>
    </div>
    </div >
  );
};


export default Header;