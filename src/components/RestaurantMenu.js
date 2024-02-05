import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestautantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    // const [resInfo , setresInfo] = useState(null);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu =async () => {
    //     const data =await fetch ( MENU_API + resId)
    //     const json = await data.json();
    //     setresInfo(json.data)
    // }

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');



    return (
        <div className="shadow-2xl">
            <div className="w-6/12 mx-auto my-4 border-dashed border-b-2 border-gray-500 p-4">
                <div className="flex justify-between">
                    <span className="text-2xl font-bold">{name} </span>
                    <span className="text-lg">⭐{avgRating}</span>
                </div>
                <p className="">{costForTwoMessage}</p>
                <small className="">{cuisines.join(", ")}</small>
            </div>

            <div className="border-solid  m-4">
                {categories.map((category , index) => (
                    <RestaurantCategory key={category?.card?.card?.title} cardData={category?.card?.card} 
                    showItem={index === showIndex ? true:false} 
                    setShowIndex = {()=> setShowIndex(index)}/>
                ))}
            </div>

        </div>

    )
}



export default RestaurantMenu;