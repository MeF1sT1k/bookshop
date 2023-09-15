import React, { Component } from 'react';
import "./book-list.css";

import BookListItem from '../book-list-item/book-list-item';
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from '../error-indicator/error-indicator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const BookList = ({ books, onAddedToCart }) => {
    return (
        books.map((book) => {
            return (
                <div
                    className='card mb-3 border-0'
                    key={book.id}
                    style={{ maxWidth: "450px" }}>
                    <BookListItem
                        onAddedToCart={() => onAddedToCart(book.id)}
                        book={book} />
                </div>
            )
        })
    )
};

class BookListContainer extends Component {

    // Redux советует выносить контейнеры в отдльную папку containers
    // на уровне с папкой components

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);