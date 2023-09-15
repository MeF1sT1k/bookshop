import React from 'react';
import "./shop-header.css";
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header sticky-top border-bottom'>
            <Link to="/">
                <h2 className='logo'>ReStore</h2>
            </Link>
            <Link to="/cart">
                <div className='cart'>
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/stickers/100/shopping-cart.png"
                        alt="shopping-cart" />
                    {numItems} items
                    (${total})
                </div>
            </Link>
        </header>
    )
}

export default ShopHeader;