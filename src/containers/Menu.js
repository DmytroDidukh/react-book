import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as cartActions from '../actions/cart';
import HeaderMenu from '../components/Menu'



const mapStateToProps = ({cart: {items, isHidden, totalPrice}}) => {
    return {
        items,
        isHidden,
        totalPrice
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(cartActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
