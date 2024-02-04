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
        <div className="mx-40 my-20 border-solid shadow-2xl">
            <div className="border-solid border-b-2 m-4">
                <h3 className="text-2xl font-bold px-12">{name} <span className="text-lg text-right">⭐{avgRating}</span></h3>
                <p className="px-12">{costForTwoMessage}</p>
                <small className="px-12">{cuisines.join(", ")}</small>
            </div>

            <div className="">
                <h2 className="font-semibold text-xl py-4">Menu</h2>
                <details className="border-2 border-dashed border-stone-500 p-4">
                    {itemCards.map(item => <summary key={item.card.info.id}>{item.card.info.name} - {"Rs-"} {item.card.info.price / 100}</summary>)}
                </details>
            </div>

        </div>

    )
}



export default RestaurantMenu;