import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
      resData?.data;
    return (
      <div className="resCard">
        <img
          alt="resimg"
          src={CDN_URL+cloudinaryImageId
          }
          width={"100%"}
          height={"250px"}
          style={{ borderRadius: "15px" }}
        ></img>
        <h3>{name}</h3>
        <h4 style={{ color: "green" }}>{costForTwo} </h4>
        <h5>
          <span>⭐</span>
          {avgRating} <span style={{ paddingLeft: "10px" }}>* {resData.data.sla.deliveryTime} Minutes</span>
        </h5>
        <p style={{ color: "gray" }}>{cuisines.join(", ")}</p>
      </div>
    );
  };

  
export default RestaurantCard;