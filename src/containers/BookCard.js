import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as cartActions from '../actions/cart';
import BookCard from '../components/BookCard';


const mapStateToProps = ({cart: {items}}, {book: {id}}) => {
    return {
        isInCart: items.find( book => book.id === id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(cartActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
