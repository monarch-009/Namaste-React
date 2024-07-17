import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //React Variable is also knows as State Variable - Super powerful variable
  const [listOfRestaurant,setListOfRestaurant] = useState(reslist);

  // // Normal JavaScript Variable
  // let listOfRestaurantjs = [
  //   {
  //     info: {
  //       id: "25189",
  //       name: "BTW",
  //       cloudinaryImageId: "c4ai8pwgz1pemtw8gnpq",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Street Food", "North Indian", "Sweets"],
  //       avgRating: 2.5,
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "28182",
  //       name: "Singh",
  //       cloudinaryImageId: "c4ai8pwgz1pemtw8gnpq",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Street Food", "North Indian", "Sweets"],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
