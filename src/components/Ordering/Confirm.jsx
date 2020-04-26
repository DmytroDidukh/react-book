import React from "react";
import {Table, Header, Image} from 'semantic-ui-react'

const Confirm = ({user: {delivery}, booksInCart, totalPrice}) => {
    const deliveryFields = ['First name', 'Last name', 'Email', 'City', 'Address', 'Phone'];


    return (
        <div id={"confirm-form"} className={"forms"}>
            <Header>Order information</Header>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Book name</Table.HeaderCell>
                        <Table.HeaderCell>Count</Table.HeaderCell>
                        <Table.HeaderCell>Price per one</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {booksInCart.map(book => (
                        <Table.Row key={book.id}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={book.image} rounded size='mini'/>
                                    <Header.Content>
                                        {book.title}
                                        <Header.Subheader>{book.author}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book.count}</Table.Cell>
                            <Table.Cell>${book.price}</Table.Cell>
                        </Table.Row>
                    ))}
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell><b>Total price:</b></Table.Cell>
                        <Table.Cell><b>${totalPrice}</b></Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
            <Header>Buyer information</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                {deliveryFields.map( (key, id) => (
                        <Table.HeaderCell key={id*Math.random()}>{key}</Table.HeaderCell>
                ))}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        {Object.entries(delivery).map( ([val, key], id) => (
                            <Table.Cell key={id*Math.random()}>{key || localStorage[val]}</Table.Cell>
                        ))}

                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
};

export default Confirm;
