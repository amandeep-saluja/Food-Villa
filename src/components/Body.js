import { useState, useEffect } from 'react';
import { filterRestaurantData } from '../utils/helper';
import Restaurant from './Restaurant.js';
import useRestaurant from '../hooks/useAllRestaurant';
import useIsOnline from '../hooks/useIsOnline';
import CLOSE from '../assets/icons/close.svg';

const Body = () => {
    // This hook will take care of reconciliation trigger
    const restaurants = useRestaurant();
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurants);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setFilteredRestaurant(restaurants);
    }, [restaurants]);

    const isOnline = useIsOnline();

    if (!isOnline) {
        return (
            <div
                style={{
                    fontSize: '30px',
                    color: 'black',
                }}
            >
                ❌ You are offline...
            </div>
        );
    }

    return (
        <div id="body">
            <div className="search">
                <input
                    placeholder={'Search Restaurant'}
                    type="text"
                    id="search-box"
                    value={searchText}
                    onChange={(event) => {
                        setSearchText(event.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            document.getElementById('searchButton').click();
                        }
                    }}
                />
                {searchText ? (
                    <img
                        src={CLOSE}
                        alt={'close'}
                        className={'cancel-search'}
                        onClick={() => {
                            setSearchText('');
                            setFilteredRestaurant(restaurants);
                        }}
                    />
                ) : (
                    <></>
                )}
                <button
                    className="btn"
                    id={'searchButton'}
                    onClick={() => {
                        const filteredRest = filterRestaurantData(restaurants, searchText);
                        setFilteredRestaurant(filteredRest);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurants">
                {filteredRestaurant
                    ? filteredRestaurant.map((restaurant) => {
                          return <Restaurant data={restaurant?.data} key={restaurant?.data?.id} />;
                      })
                    : null}
            </div>
        </div>
    );
};

export default Body;
