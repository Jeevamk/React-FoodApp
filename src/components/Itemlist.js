import { CDN_URL } from "../utils/constants"

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 text-left flex justify-between border-b-2">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100}</span>
                        </div>
                        <div>
                            <span className="italic">{item.card.info.category}</span>
                        </div>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 bg-black text-white mx-14 rounded-lg">Add</button>
                        </div>
                        {/* <img src={CDN_URL + item.card.info.imageId } ></img> */}
                    </div>


                </div>
            ))}
        </div>
    )
}

export default ItemList;