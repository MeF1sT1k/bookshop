import React from 'react';
import "./book-list-item.css";

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;

    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={coverImage} className='img-fluid rounded-start' alt={title} />
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>
                        <small className='text-body-secondary'>
                            {author}
                        </small>
                    </p>
                    <h4 className='card-text'>{price}$</h4>
                    <button
                        className='btn btn-outline-secondary'
                        onClick={onAddedToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookListItem;