import './RestaurantMenu.css';
import { useParams } from 'react-router-dom';
import useRestaurantData from '../../hooks/useRestaurantData';
import { IMG_CDN_LINK } from '../../utils/Constants';
const RestaurantMenu = () => {
    const { restId } = useParams();
    const { cloudinaryImageId, name, cuisines, totalRatingsString, area, city, menu } = useRestaurantData(restId);

    return (
        name && (
            <div className={'restaurant'}>
                <div className={'restaurant-details'}>
                    <img src={IMG_CDN_LINK + cloudinaryImageId} alt={'restaurant image'} />
                    <span className={'restaurant-details-name'}>{name}</span>
                    <span className={'restaurant-details-cuisines'}>{cuisines}</span>
                    <span className={'restaurant-details-totalRatingsString'}>{totalRatingsString}</span>
                    <span className={'restaurant-details-area'}>{area}</span>
                    <span className={'restaurant-details-city'}>{city}</span>
                </div>
                <div className={'restaurant-menu'}>
                    <ul>
                        {menu &&
                            Object.values(menu?.items).map((item) => {
                                return <li key={item.id}>{item?.name}</li>;
                            })}
                    </ul>
                </div>
            </div>
        )
    );
};

export default RestaurantMenu;
