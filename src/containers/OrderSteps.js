import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as orderActions from '../actions/orderSteps';
import OrderSteps from '../components/Ordering/OrderSteps'


const mapStateToProps = ({orderSteps: {delivery, payment, confirm}}) => {
    const steps = [
        {
            key: 'shipping',
            active: delivery.active,
            completed: delivery.completed,
            disabled: delivery.disabled,
            icon: 'truck',
            title: 'Delivery',
            description: 'Enter your delivery information',
        },
        {
            key: 'billing',
            active: payment.active,
            completed: payment.completed,
            disabled: payment.disabled,
            icon: 'payment',
            title: 'Payment',
            description: 'Enter payment information',
        },
        {
            key: 'confirm',
            active: confirm.active,
            completed: confirm.completed,
            disabled: confirm.disabled,
            icon: 'info',
            title: 'Confirm Order'
        },
    ];

    return {steps}
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(orderActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSteps);
