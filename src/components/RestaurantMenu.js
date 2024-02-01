import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=> {

    const [resInfo , setresInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu =async () => {
        const data =await fetch ( MENU_API + resId)
        const json = await data.json();
        setresInfo(json.data)
    }

    if(resInfo===null) {
        return <Shimmer />
    }

const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
const { itemCards }  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
console.log(itemCards);


    return (
        <div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>⭐{avgRating} - {costForTwoMessage}</h4> 

            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - {"Rs-"} {item.card.info.price / 100}</li>)}
            </ul>
        </div>    
        
    )
}



export default RestaurantMenu;