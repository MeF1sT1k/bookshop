import React from 'react';
import "./shop-header.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ numItems, orderTotal }) => {
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
                    {numItems} item(s)
                    ${orderTotal}
                </div>
            </Link>
        </header>
    )
};

const mapStateToProps = ({ shoppingCart: { orderTotal, numItems } }) => {
    return { orderTotal, numItems };
}

export default connect(mapStateToProps)(ShopHeader);