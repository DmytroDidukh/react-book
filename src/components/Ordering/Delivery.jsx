import React, {useEffect} from "react";
import {Form} from "semantic-ui-react";


const Delivery = ({user: {delivery}, setUserField}) => {
    const {name, surname, email, city, address, phone} = delivery;

    useEffect( () => {

        for (let key in delivery) {
            setUserField(key, localStorage[key] ? localStorage[key] : '')
        }
    }, []);


    function createUserField(event) {
        event.persist();
        const {name, value} = event.target;

        setUserField(name, value)
    }

    return (
        <div className={'forms'}>
            <Form onChange={(e) => createUserField(e)}>
            <Form.Group unstackable widths={3}>
                <Form.Input required label='First name' placeholder='First name' name={'name'} value={name}/>
                <Form.Input required label='Last name' placeholder='Last name' name={'surname'} value={surname}/>
                <Form.Input required label='Email' placeholder='Email' name={'email'} value={email}/>
            </Form.Group>
            <Form.Group widths={3}>
                <Form.Input required label='City' placeholder='City' name={'city'} value={city}/>
                <Form.Input required label='Address' placeholder='Address' name={'address'} value={address}/>
                <Form.Input required label='Phone' placeholder='Phone' name={'phone'} value={phone}/>
            </Form.Group>
        </Form>
        </div>
    )
};


export default Delivery;
