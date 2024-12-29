import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";

const Body = () => {
  //React Variable is also knows as State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(reslist);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList)

  const [searchText, setSearchText] = useState("");

  // whenever state variable update, react trigger a reconciliation cycle(re - render the components)
  console.log("Body Render");

  // Lecture - 6 
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    const data = await fetch();

    const json = await data.json();

    console.log(json);

    //Optional Chaninig
    setListOfRestaurant(json?.data.cards[2]?.data?.data?.cards);
  };

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

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

            // console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
