import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Button, Form, Container} from "semantic-ui-react";

import {HeaderMenu} from "../../containers";
import Checkout from "../../components/Checkout";

const Ordering = () => {

    return (
        <Container>
            <HeaderMenu/>
            <Checkout/>
            <Form>
                <Form.Input
                    error={false}
                    fluid
                    label='First name'
                    placeholder='First name'
                    id='form-input-first-name'
                />
                <Form.Input
                    error={false}
                    fluid
                    label='Last name'
                    placeholder='Last name'
                />
                <Link to={"/next"}>
                    <Button id={"checkout"} className={"ui green basic button"}>Next</Button>
                </Link>
            </Form>

        </Container>
    )
};

export default Ordering;
