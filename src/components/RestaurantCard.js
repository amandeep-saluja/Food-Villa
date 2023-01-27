import { IMG_CDN_LINK } from '../Constants.js';
const RestaurantCard = ({ name, area, cloudinaryImageId, totalRatingsString, cuisines }) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={IMG_CDN_LINK + cloudinaryImageId} alt="Food Icon" />
            <span className="restaurant-name">{name}</span>
            <span className="restaurant-cuisines">{cuisines.join(', ')}</span>
            <span className="restaurant-area">{area}</span>
            <span className="restaurant-rating">{totalRatingsString}</span>
        </div>
    );
};

export default RestaurantCard;
