import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

//local state variables
const [resOfList,setresOfList] = useState ([]);
const [searchText,setsearchText] = useState("");
const [filterData,setFilterData] = useState([]);




useEffect(()=>{
  fetchData();
},[])

const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
  const json = await data.json()
  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  //optional chaining//
  setresOfList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}


const OnlineStatus = useOnlineStatus();
if(OnlineStatus===false) {
  return <h1>NO Internet , Pleace check internet Connections!!!</h1>
}

//conditional rendering//
// if (resOfList.length === 0) {
//   return <Shimmer/>
// }

  return (resOfList.length === 0) ?  <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input type="text" className="seach-text"  placeholder="Search here...." value={searchText} onChange={(e)=> {
            setsearchText(e.target.value);
          }}></input>
          <button className="search-btn" onClick={()=>{
            const filterSearch = resOfList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterData(filterSearch);
          }}>Search</button>
        </div>
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
        {filterData.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}

      </div>
    </div>
  );
};

export default Body;
