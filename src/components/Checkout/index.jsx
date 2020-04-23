import React from "react";
import {Icon, Step} from 'semantic-ui-react'


const Checkout = () => {

    const steps = [
        {
            key: 'shipping',
            active: true,
            completed: false,
            disabled: false,
            icon: 'truck',
            title: 'Shipping',
            description: 'Choose your shipping options',
        },
        {
            key: 'billing',
            active: false,
            completed: false,
            disabled: true,
            icon: 'payment',
            title: 'Billing',
            description: 'Enter billing information',
        },
        {
            key: 'confirm',
            active: false,
            completed: false,
            disabled: true,
            icon: 'info',
            title: 'Confirm Order'
        },
    ]

    return (
        <Step.Group items={steps}/>
    )
};

export default Checkout;

