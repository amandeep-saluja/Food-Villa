import { useState, useEffect } from 'react';
import { DATA_LINK } from '../utils/Constants';

const useAllRestaurant = () => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getAllRestaurant();
    }, []);

    async function getAllRestaurant() {
        try {
            const data = await fetch(DATA_LINK);
            const json = await data.json();
            setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        } catch (e) {
            console.log('Logging error: ', e);
        }
    }

    return restaurant;
};

export default useAllRestaurant;
