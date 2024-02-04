import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

  //local state variables
  const [resOfList, setresOfList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  console.log("reslist",resOfList);




  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //optional chaining//
    setresOfList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h1>NO Internet , Pleace check internet Connections!!!</h1>
  }

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

      </div>
      <div className="flex flex-wrap ">
        {filterData.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}

      </div>
    </div>
  );
};

export default Body;
