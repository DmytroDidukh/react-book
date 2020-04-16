import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {orderBy, filter, includes} from 'lodash'

import * as sortActions from '../actions/sort';
import SortPanel from '../components/SortPanel'


export function sort(books, sortBy, searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();

    books = filter(books, (b) => (
        includes(b.title.toLowerCase(), lowerQuery) || includes(b.author.toLowerCase(), lowerQuery))
    );

    switch (sortBy) {
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
        default:
            return books
    }
}


const mapStateToProps = ({sort: {sortBy, searchQuery}}) => {
    return {sortBy: sortBy, searchQuery: searchQuery}
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(sortActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
