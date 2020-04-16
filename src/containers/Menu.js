import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as cartActions from '../actions/cart';
import HeaderMenu from '../components/Menu'



const mapStateToProps = ({cart: {items, isHidden}}) => {
    return {
        items,
        isHidden,
        totalPrice: items.reduce( (sum, {price}) => sum + price, 0)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(cartActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
