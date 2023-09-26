import React from 'react';
import { connect } from "react-redux";
import "./shopping-cart-table.css";
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
} from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;

        return (
            <tr key={id}>
                <th>{idx + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td className='actions'>
                    <button
                        type='button'
                        className='btn btn-sm'
                        onClick={() => onIncrease(id)}>
                        <img src="./img/plus1.png" />
                    </button>
                    <button
                        type='button'
                        className='btn btn-sm '
                        onClick={() => onDecrease(id)}>
                        <img src="./img/minus1.png" />
                    </button>
                    <button
                        type='button'
                        className='btn btn-sm'
                        onClick={() => onDelete(id)}>
                        <img src="./img/delete1.png" />
                    </button>
                </td>
            </tr>
        )
    }

    // const renderTotalSum = (total) => {
    //     let result = items.reduce((sum, current) => sum + current, total)

    // }

    return (
        <div className='shopping-cart-table'>
            <h2>Order</h2>
            <table className='table align-middle'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Item</th>
                        <th scope='col'>Count</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className='total'>

                <h4>Total: ${total}</h4>
            </div>
        </div>
    )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBookRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);