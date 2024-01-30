import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";



const Body = () => {

//local state variables
const [resOfList,setresOfList] = useState ([]);

useEffect(()=>{
  fetchData();
},[])

const fetchData = async() => {
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2486583&lng=75.83347");
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTIP_WEB_LISTING");
  const json = await data.json()
  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  setresOfList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
}



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filterdResOfList = resOfList.filter((res) => res.info.avgRating > 4);
           setresOfList(filterdResOfList)
          }}
          
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resOfList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    </div>
  );
};

export default Body;
