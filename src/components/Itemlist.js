import { CDN_URL } from "../utils/constants"

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 text-left flex justify-between border-b-2">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100}</span>
                        </div>
                        <div>
                            <span>{item.card.info.description}</span>
                        </div>
                    </div>
                    <div className="w-3/12 p-4">
                        <img src={CDN_URL + item.card.info.imageId } ></img>

                    </div>


                </div>
            ))}
        </div>
    )
}

export default ItemList;