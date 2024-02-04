import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    // const [resInfo , setresInfo] = useState(null);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

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
    console.log(itemCards);


    return (
        <div className="m-9">
            <div className="text-center">
                <h3 className="text-2xl font-bold">{name}</h3>
                <h4 className="">⭐{avgRating} - {costForTwoMessage}</h4>
                <h4>{cuisines.join(", ")}</h4>
            </div>

            <div className="text-center">
                <h2 className="font-semibold text-xl py-4">Menu</h2>
                <ul>
                    {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs-"} {item.card.info.price / 100}</li>)}
                </ul>
            </div>

        </div>

    )
}



export default RestaurantMenu;