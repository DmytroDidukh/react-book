import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Step} from 'semantic-ui-react'


const OrderSteps = ({steps, toShipping, toPayment, toConfirm, toThanks}) => {

    const history = useHistory();
    const pathname = history.location.pathname;

    useEffect(() => {
        switch (history.location.pathname) {
            case '/checkout/payment':
                toPayment();
                return;
            case '/checkout/confirm':
                toConfirm();
                return;
            case '/checkout/thanks-window':
                toThanks();
                return;
            default:
                toShipping();
        }
    }, [pathname]);

    return (
        <Step.Group items={steps}/>
    )
};

export default OrderSteps;

