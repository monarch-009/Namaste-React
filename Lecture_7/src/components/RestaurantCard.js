const RestaurantCard = (props) => {
  const { resData } = props;
  
  if (!resData) {
    console.error('resData is undefined or null');
    return null;
  }

  const {
    cloudinaryImageId = '',
    name = '',
    avgRating = 0,
    cuisines = [],
    costForTwo = '',
    sla = {}
  } = resData || {};

  const {deliveryTime = 0 } = sla;

  return (
    <div className="res-card" >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <h5>{avgRating} star</h5>
      <h5>{costForTwo} / 100</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
