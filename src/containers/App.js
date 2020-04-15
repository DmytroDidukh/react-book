import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {orderBy, filter, includes} from 'lodash'

import * as booksActions from '../actions/books';
import App from '../components/App'


function sort(books, type) {
    switch (type) {
        case 'all':
            return orderBy(books, 'id', 'asc');
        case 'popular':
            return orderBy(books, 'rating', 'desc');
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'by author':
            return orderBy(books, 'author', 'asc');
        default: //search
            return filter(books, (b) => (
                includes(b.title.toLowerCase(), type) || includes(b.author.toLowerCase(), type))
            );
    }
}


const mapStateToProps = ({books: {items, isReady, sortBy}}) => {
    return {
        books: sort(items, sortBy),
        isReady: isReady
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(booksActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

