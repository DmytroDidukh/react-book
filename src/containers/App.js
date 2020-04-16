import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as booksActions from '../actions/books';
import App from '../components/App';

import {sort} from './Sort'

const mapStateToProps = ({books: {items, isReady}, sort:{sortBy, searchQuery}}) => {
    console.log(sortBy)
    console.log(searchQuery);
    return {
        books: sort(items, sortBy, searchQuery),
        isReady: isReady
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(booksActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

