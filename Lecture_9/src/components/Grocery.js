import React from 'react';

import apple from '../imgs/apple.jpg'
import bananas from '../imgs/bananas.jpg'
import grapes from '../imgs/grapes.jpg'

import carrots from '../imgs/carrots.jpg'
import potatoes from '../imgs/potatoes.jpg'
import tomotoes from '../imgs/tomatoes.jpg'

import cheese from '../imgs/cheese.jpg'
import chips from '../imgs/chips.jpg'
import coffee from '../imgs/coffee.jpg'
import cookies from '../imgs/cookies.jpg'
import juice from '../imgs/juice.jpg'
import milk from '../imgs/milk.jpg'
import popcorn from '../imgs/popcorn.jpg'
import tea from '../imgs/tea.jpg'
import yogurt from '../imgs/yogurt.jpg'



const Grocery = () => {
    const groceryData = [
        {
            category: 'Fruits',
            items: [
                { id: 1, name: 'Apples', price: '$2.50/kg', description: 'Fresh and juicy apples.', image: apple },
                { id: 2, name: 'Bananas', price: '$1.20/kg', description: 'Sweet bananas for your health.', image: bananas },
                { id: 3, name: 'Grapes', price: '$3.00/kg', description: 'Delicious green grapes.', image: grapes },
            ],
        },
        {
            category: 'Vegetables',
            items: [
                { id: 4, name: 'Carrots', price: '$0.90/kg', description: 'Crunchy carrots full of vitamins.', image: carrots },
                { id: 5, name: 'Potatoes', price: '$1.00/kg', description: 'Perfect for fries and curries.', image: potatoes },
                { id: 6, name: 'Tomatoes', price: '$1.50/kg', description: 'Ripe and ready for sauces.', image: tomotoes },
            ],
        },
        {
            category: 'Dairy Products',
            items: [
                { id: 7, name: 'Milk', price: '$0.80/litre', description: 'Fresh and organic milk.', image: milk },
                { id: 8, name: 'Cheese', price: '$3.00/pack', description: 'Delicious and creamy cheese.', image: cheese },
                { id: 9, name: 'Yogurt', price: '$1.50/pack', description: 'Thick and healthy yogurt.', image: yogurt },
            ],
        },
        {
            category: 'Snacks',
            items: [
                { id: 10, name: 'Chips', price: '$1.00/pack', description: 'Crispy and salty potato chips.', image: chips },
                { id: 11, name: 'Cookies', price: '$2.00/pack', description: 'Chocolate chip cookies.', image: cookies },
                { id: 12, name: 'Popcorn', price: '$1.50/pack', description: 'Buttery and delicious popcorn.', image: popcorn },
            ],
        },
        {
            category: 'Beverages',
            items: [
                { id: 13, name: 'Orange Juice', price: '$2.50/litre', description: 'Freshly squeezed orange juice.', image: juice },
                { id: 14, name: 'Coffee', price: '$3.00/pack', description: 'Rich and aromatic coffee.', image: coffee },
                { id: 15, name: 'Tea', price: '$2.00/pack', description: 'Refreshing and energizing tea.', image: tea },
            ],
        },
    ];

    return (
        <div className="grocery-container">
            <h1>Welcome to Our Grocery Store</h1>
            <p>Explore our wide range of fresh products, organized by categories:</p>
            {groceryData.map((category, index) => (
                <div key={index} className="category-section">
                    <h2>{category.category}</h2>
                    <ul className="grocery-list">
                        {category.items.map(item => (
                            <li key={item.id} className="grocery-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span> -
                                    <span className="item-price">{item.price}</span>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Grocery;
