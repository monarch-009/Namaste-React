import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {


    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {Array.isArray(itemCards) ? (
                    itemCards.map(item => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs {item.card.info.price / 100}
                        </li>
                    ))
                ) : (
                    <li>No items available</li>
                )}
            </ul>

        </div>
    )
}

export default RestaurantMenu
