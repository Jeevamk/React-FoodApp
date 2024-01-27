import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=360"
        ></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Offers</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
    resData?.data;
  return (
    <div className="resCard">
      <img
        alt="resimg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
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

const resList = [
  {
    data: {
      id: "464673",
      name: "Soofi Mandi",
      cloudinaryImageId: "mkevcwbgxz9kzq7himtu",
      locality: "Mananchira",
      areaName: "Vellayil",
      costForTwo: "₹400 for two",
      cuisines: ["Arabian", "Middle Eastern"],
      avgRating: 4.3,
      parentId: "20530",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10801764~p=1~eid=0000018d-3b29-c9bc-1eb6-ef7800aa013b~srvts=1706094610876~45995",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },

  {
    data: {
      id: "490981",
      name: "Top Form_Mavoor Road",
      cloudinaryImageId: "b5303a94c367062c158ce278bf6307a3",
      locality: "Mavoor Road",
      areaName: "Kuttichira",
      costForTwo: "₹400 for two",
      cuisines: [
        "South Indian",
        "Kerala",
        "Biryani",
        "Chinese",
        "Salads",
        "Seafood",
      ],
      avgRating: 4.4,
      parentId: "454775",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-25 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=490981",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "153273",
      name: "Hotel Sagar (Old Sagar)",
      cloudinaryImageId: "rapy3ovwlb9rp5udsvcr",
      locality: "Mavoor Road",
      areaName: "Kuttichira",
      costForTwo: "₹400 for two",
      cuisines: [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani",
      ],
      avgRating: 4.5,
      parentId: "20206",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=153273",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "375506",
      name: "McDonald's",
      cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
      locality: "Focus Mall",
      areaName: "Puthiyara",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-25 00:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=375506",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "693175",
      name: "Top Form_Chevayoor",
      cloudinaryImageId: "b5303a94c367062c158ce278bf6307a3",
      locality: "Chevayurn",
      areaName: "Kunnamangalam",
      costForTwo: "₹200 for two",
      cuisines: [
        "Indian",
        "South Indian",
        "Andhra",
        "Tandoor",
        "Snacks",
        "Chinese",
        "Biryani",
        "Salads",
        "Desserts",
        "Beverages",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "457332",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10787155~p=2~eid=0000018d-3b29-c9bc-1eb6-ef7900aa020b~srvts=1706094610876~45995",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  description: "OnlyOnSwiggy",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=693175",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "481120",
      name: "Nahdi Kuzhimanthi",
      cloudinaryImageId: "oky2o28b1rraeglmyjjy",
      locality: "Red Cross Road",
      areaName: "Vellayil",
      costForTwo: "₹499 for two",
      cuisines: ["Arabian", "Middle Eastern"],
      avgRating: 4.4,
      parentId: "251368",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=481120",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "160737",
      name: "Zam Zam Restaurant",
      cloudinaryImageId: "20c867a00224918971fbcd92583190fe",
      locality: "Beach Road",
      areaName: "Vellayil",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Arabian",
        "Kerala",
        "Biryani",
        "North Indian",
        "Chinese",
        "Tandoor",
        "Salads",
        "Juices",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "8883",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=160737",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "592202",
      name: "IkkuBhais Kuzhimanthi",
      cloudinaryImageId: "keyaxmjyl6brq0wfoj3r",
      locality: "Silk Street",
      areaName: "Silk Street",
      costForTwo: "₹250 for two",
      cuisines: [
        "Arabian",
        "Chinese",
        "South Indian",
        "Grill",
        "Juices",
        "Beverages",
        "Ice Cream",
      ],
      avgRating: 4,
      parentId: "355506",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=592202",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "480696",
      name: "Puresouth",
      cloudinaryImageId: "ptmv9ilibohoiwgohdy1",
      locality: "Beach Road",
      areaName: "Bilathikkulam",
      costForTwo: "₹199 for two",
      cuisines: ["Chinese", "South Indian"],
      avgRating: 4.3,
      veg: true,
      parentId: "162872",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10766464~p=3~eid=0000018d-3b29-c9bc-1eb6-ef7a00aa034d~srvts=1706094610876~45995",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=480696",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "803362",
      name: "Kappikoottam",
      cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
      locality: "YMCA Cross Road",
      areaName: "Beach Road",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Biryani", "Beverages"],
      avgRating: 4.2,
      parentId: "479558",
      avgRatingString: "4.2",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=803362",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "518827",
      name: "Tastea",
      cloudinaryImageId: "whrteiqyaihlmfnzdv1q",
      locality: "Garlic Road",
      areaName: "Vellayil",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "American"],
      avgRating: 3.7,
      parentId: "309954",
      avgRatingString: "3.7",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 19:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=518827",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "437938",
      name: "Big Fat Momo",
      cloudinaryImageId: "niejlwued12ctp4rsenp",
      locality: "PT Usha Road",
      areaName: "Vellayil",
      costForTwo: "₹199 for two",
      cuisines: ["Chinese", "Pizzas"],
      avgRating: 4.3,
      parentId: "20555",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=437938",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "230155",
      name: "Sagar Restaurant (New Sagar)",
      cloudinaryImageId: "sfazfve7qn0ybwbgrrhj",
      locality: "Mavoor Road",
      areaName: "Palayam",
      costForTwo: "₹400 for two",
      cuisines: [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani",
      ],
      avgRating: 4.3,
      parentId: "20195",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=10820609~p=4~eid=0000018d-3b29-c9bc-1eb6-ef7b00aa0443~srvts=1706094610876~45995",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=230155",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "340560",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Rp Mall",
      areaName: "Palayam",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-25 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=340560",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

