import { useState } from "react";
import ItemList from "./Itemlist";

const RestaurantCategory = ({ cardData }) => {

    const [showItem,  setShowItem] = useState(false);
   
    const handleClick = () => {setShowItem(!showItem)};


    return (

        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 border-dashed shadow-lg border-b-2 border-gray-300 p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{cardData.title} ({cardData.itemCards.length})</span>
                    <span className="cursor-pointer" >⬇️</span>
                </div>

                {/* accordion body */}
               
              { showItem && <ItemList items={cardData.itemCards} />}
                
            </div>
        </div>
    )
}


export default RestaurantCategory;