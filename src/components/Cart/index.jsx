import React from "react";
import {Link} from "react-router-dom";
import {Item, Icon, Message, Button} from 'semantic-ui-react';
import {InputNumber} from 'antd';


import 'antd/dist/antd.css';
import './style.scss'


const Cart = ({items: booksInCart, isHidden, onCartClick, removeFromCart, changeTotalPrice}) => {

    function onChange(value, book) {
        book.count = value;
        changeTotalPrice(book)
    }

    function showDeleteConfirm(book) {
        if (window.confirm(`Delete ${book.title}?`)) {
            removeFromCart(book);
        }
    }

    function cartToLocal(cartBooks) {
        localStorage.setItem('localCartBooks', JSON.stringify(cartBooks))
    }

    return (
        <Item.Group className={'cart-popup'}>
            <Icon name='remove circle' onClick={() => onCartClick(isHidden)}/>

            {
                booksInCart.length ?
                    (booksInCart.map((book) => (
                            <Item key={book.id}>
                                <Item.Image size='tiny' src={book.image}/>

                                <Item.Content>
                                    <Item.Header as='a'>{book.title}</Item.Header>
                                    <Item.Meta>{book.author}</Item.Meta>
                                    <Item.Extra>
                                        <Icon name='dollar'/>{book.price}
                                    </Item.Extra>
                                    <Icon name='trash alternate outline'
                                          onClick={() => showDeleteConfirm(book)}/>
                                </Item.Content>
                                <InputNumber min={1} max={10} defaultValue={book.count}
                                             onChange={(v) => onChange(v, book)}/>
                            </Item>
                        ))
                    ) : (
                        <Message negative>
                            <Message.Header>Cart is empty</Message.Header>
                        </Message>)
            }
            {booksInCart.length ?
                <Link to={"/checkout/shipping"}>
                    <Button
                        id={"checkout"} basic color='green'
                        onClick={() => {onCartClick(isHidden); cartToLocal(booksInCart)}}>checkout</Button>
                </Link>
                : ''}
        </Item.Group>
    )
};

export default Cart
