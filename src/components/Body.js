import Restaurant from './Restaurant.js';
import {useState} from 'react';
import data from '../../v5.json';

const Body = () => {
    console.log('render', data?.data?.data?.cards)
    const [restaurants] = useState(data?.data?.data?.cards);

    return (
        <div id="body">
            <div className="search">
                <input type="text" id="search-box"/>
                <button className="btn">Search</button>
            </div>
            <div className="restaurants">
                {restaurants.map((restaurant, index) => {
                    return <Restaurant data={restaurant.data} key={index}/>
                })}
            </div>
        </div>
    );
};

export default Body;
