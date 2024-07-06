import React from "react";
import ReactDOM from "react-dom/client";

/** 
* Header 
* - Logo
* - Nav Item
*
* Body
* - Search
* - RestaurantContainer
*  - RestaurantCard
*
* Footer
* - Copyright
* - Links
* - Address
* Contact

*/

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard1 = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://images.indianexpress.com/2023/12/food.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>Biriyani,North Indian, Asian</h4>
      <h5>4.4 star</h5>
    </div>
  );
};
const RestaurantCard2 = ({ resName }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#FFFFED" }}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKLVQR7x7nvgkJ7dXM6VueElgOjgSX1JAIw&usqp=CAU"
      />
      <h3>{resName}</h3>
      <h4>South Indian, English,</h4>
      <h5>3.4 star</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard1 resName="Mahadev Sweets" cuisines="Chart, Samosha" />
        <RestaurantCard2 resName="Lovely Sweets"  />
        <RestaurantCard1 resName="Rajan Sweets" />
        <RestaurantCard2 resName="Sankar Sweets" />
        <RestaurantCard1 resName="Raj Sweets" />
        <RestaurantCard2 />
        <RestaurantCard1 resName="Laxmi Sweets" />
        <RestaurantCard2 />
        <RestaurantCard1 resName="Nand Sweets" />
        <RestaurantCard2 />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Footer">
      <p>@Copyright</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
