import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as cartActions from '../actions/cart';
import Cart from '../components/Cart'


const mapStateToProps = ({cart: {items, isHidden}}) => {
    return {items, isHidden}
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(cartActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
