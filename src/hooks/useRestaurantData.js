import { useState, useEffect } from 'react';
import { RESTAURANT_DETAILS_URL } from '../utils/Constants';
const useRestaurantData = (restId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const data = await fetch(RESTAURANT_DETAILS_URL + restId);
        const json = await data.json();
        console.log(json?.data);
        setRestaurant(json?.data);
    }

    return restaurant;
};

export default useRestaurantData;
