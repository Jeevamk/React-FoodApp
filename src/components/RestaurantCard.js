import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
      resData?.info;
    return (
      <div className="m-4 p-2 w-[250px] bg-slate-100 h-[450px] rounded-lg">
        <img
          alt="resimg" className="h-[250px] w-[250px] rounded-lg" 
          src={CDN_URL+cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold text-lg py-2">{name}</h3>
        <h4 style={{ color: "green" }}>{costForTwo} </h4>
        <h5>
          <span>⭐</span>
          {avgRating} <span style={{ paddingLeft: "10px" }}>* {resData.info.sla.deliveryTime} Minutes</span>
        </h5>
        <p style={{ color: "gray" }}>{cuisines.join(", ")}</p>
      </div>
    );
  };

  
export default RestaurantCard;