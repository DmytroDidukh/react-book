import React, {useEffect} from "react";
import {Form} from "semantic-ui-react";

const Payment = ({user: {payment}, setUserField}) => {
    const {card, cardOwner, cvv, expires} = payment;

    useEffect( () => {

        for (let key in payment) {
            setUserField(key, localStorage[key] ? localStorage[key] : '')
        }
    }, []);

    function createUserField(event) {
        event.persist();
        const {name, value} = event.target;

        setUserField(name, value)
    }


    return (
        <div className={"forms"}>
            <Form onChange={(e) => createUserField(e)}>
            <Form.Group unstackable widths={2}>
                <Form.Input required label='Card number' placeholder='Card number' name={'card'} value={card}/>
                <Form.Input required label='Card owner' placeholder='Card owner' name={'cardOwner'} value={cardOwner}/>
            </Form.Group>
            <Form.Group widths={2}>
                <Form.Input required label='CVV' placeholder='CVV' name={'cvv'} value={cvv}/>
                <Form.Input required label='Expires date' placeholder='Expires date' name={'expires'} value={expires}/>
            </Form.Group>
        </Form>
        </div>
    )
};

export default Payment;
