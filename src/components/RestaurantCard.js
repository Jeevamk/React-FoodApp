import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
      resData?.info;
    return (
      <div className="m-4 p-2 w-[250px] h-[450px] rounded-lg shadow-md hover:shadow-2xl ">
        <img
          alt="resimg" className="h-[250px] w-[250px] rounded-lg" 
          src={CDN_URL+cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold text-lg py-2">{name}</h3>
        <h4 className="text-green-700 font-semibold">{costForTwo} </h4>
        <h5 className="font-medium">
          <span>⭐</span>
          {avgRating} <span style={{ paddingLeft: "10px" }}>* {resData.info.sla.deliveryTime} Minutes</span>
        </h5>
        <p className="text-gray-500 italic">{cuisines.join(", ")}</p>
      </div>
    );
  };

  
export default RestaurantCard;