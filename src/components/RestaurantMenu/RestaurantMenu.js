import './RestaurantMenu.css';
import { useParams } from 'react-router-dom';
import useRestaurantData from '../../hooks/useRestaurantData';
import { IMG_CDN_LINK } from '../../utils/Constants';
const RestaurantMenu = () => {
    const { restId } = useParams();
    console.log('Params: ', restId);

    const restaurant = useRestaurantData(restId);

    return restaurant ? (
        <div className={'restaurant'}>
            <div className={'restaurant-details'}>
                <img src={IMG_CDN_LINK + restaurant?.cloudinaryImageId} alt={'restaurant image'} />
                <span className={'restaurant-details-name'}>{restaurant?.name}</span>
                <span className={'restaurant-details-cuisines'}>{restaurant?.cuisines}</span>
                <span className={'restaurant-details-totalRatingsString'}>{restaurant?.totalRatingsString}</span>
                <span className={'restaurant-details-area'}>{restaurant?.area}</span>
                <span className={'restaurant-details-city'}>{restaurant?.city}</span>
            </div>
            <div className={'restaurant-menu'}>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => {
                        return <li>{item?.name}</li>;
                    })}
                </ul>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default RestaurantMenu;
