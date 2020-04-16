import React from "react";
import {Item, Icon, Message} from 'semantic-ui-react'


const Cart = ({items: booksInCart, isHidden, onCartClick, removeFromCart}) => {

    return (
        <Item.Group className={'cart-popup'}>
            <Icon name='remove circle' onClick={() => onCartClick(isHidden)}/>

            {
                booksInCart.length ?
                    (booksInCart.map(book => (
                            <Item key={book.id}>
                                <Item.Image size='tiny' src={book.image}/>

                                <Item.Content>
                                    <Item.Header as='a'>{book.title}</Item.Header>
                                    <Item.Meta>{book.author}</Item.Meta>
                                    <Item.Extra>
                                        <Icon name='dollar'/>{book.price}
                                    </Item.Extra>
                                    <Icon name='trash alternate outline'
                                          onClick={() => removeFromCart(book.id)}/>
                                </Item.Content>
                            </Item>
                        ))
                    ) : (
                        <Message negative>
                            <Message.Header>Cart is empty</Message.Header>
                        </Message>)
            }

        </Item.Group>
    )
};

export default Cart
