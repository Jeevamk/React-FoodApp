import RestaurantCard , { WithPromotedRestaurant } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import UserContext from "../utils/UserContext";



const Body = () => {

  //local state variables
  const [resOfList, setresOfList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  const RestaurantCardPromoted = WithPromotedRestaurant(RestaurantCard)





  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()
    //optional chaining//
    setresOfList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h1>NO Internet , Pleace check internet Connections!!!</h1>
  }

  const { loggedInUser,setUserName } = useContext(UserContext)

  //conditional rendering//
  // if (resOfList.length === 0) {
  //   return <Shimmer/>
  // }

  return (resOfList.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="flex m-4">
        <div className="search-box">
          <input type="text" className="border border-black p-1 m-3 placeholder:italic placeholder:text-slate-400" placeholder="Search for anything..." value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }}></input>
          <button className="search border border-black bg-black text-white py-1 px-4 rounded-lg italic" onClick={() => {
            const filterSearch = resOfList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterData(filterSearch);
          }}>Search</button>
        </div>
        <div className="mx-8 my-3">
          <button
            className="search border border-black  px-4 py-1 rounded-lg italic"
            onClick={() => {
              const filterdResOfList = resOfList.filter((res) => res.info.avgRating > 4.2);
              setFilterData(filterdResOfList)
            }}>
            Top Rated Restaurants
          </button>

        </div>
        <div className="mx-8 my-3">
          <label>User Name:</label>
          <input className="border border-black  px-4 py-1 rounded-lg " onChange={(e) => {setUserName(e.target.value)}} value={loggedInUser}></input>

        </div>

      </div>
      <div className="flex flex-wrap ">
        {filterData.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.veg ? ( <RestaurantCardPromoted resData={restaurant} />) : 
            (<RestaurantCard resData={restaurant} />)}</Link>
        ))}

      </div>
    </div>
  );
};

export default Body;
