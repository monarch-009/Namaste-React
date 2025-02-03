import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(reslist);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList)

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch();

    const json = await data.json();

    //Optional Chaninig
    setListOfRestaurant(json?.data.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection</h1>


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" placeholder="Enter name" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button onClick={() => {
            //Filter the restraunt cards and update the UI 
            //Search Text
            console.log(searchText);
            const filterRestaurant = listOfRestaurant.filter((resList) => resList.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filterRestaurant);
          }} className="search-btn">Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);

          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
