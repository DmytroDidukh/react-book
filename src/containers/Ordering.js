import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as orderActions from '../actions/orderSteps';
import * as userActions from '../actions/user';
import * as cartActions from '../actions/cart';
import Ordering from '../pages/Ordering'


function checkForm(form) {
   return Object.values(form).every( val => val.trim())
}

const mapStateToProps = ({user, cart: {items, totalPrice}}) => {
    return {
        user,
        items,
        totalPrice,
        isDeliveryFormComplete: checkForm(user.delivery),
        isPaymentFormComplete: checkForm(user.payment),
        }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(orderActions, dispatch),
        ...bindActionCreators(userActions, dispatch),
        ...bindActionCreators(cartActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
