import React, {useState} from "react";
import {Item, Icon, Message, Confirm} from 'semantic-ui-react';
import {InputNumber} from 'antd';

import 'antd/dist/antd.css';
import './style.scss'


const Cart = ({items: booksInCart, isHidden, onCartClick, removeFromCart, changeTotalPrice}) => {
    const [isShowConfirm, setShowConfirm] = useState(false);


    function onChange(value, book) {
        book.count = value;
        changeTotalPrice(book)
    }

    function showDeleteConfirm() {
        setShowConfirm(true)
    }

    function deleteConfirm(book) {
        removeFromCart(book);
        setShowConfirm(false)
    }

    function deleteCancel() {
        setShowConfirm(false)
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
                                          onClick={showDeleteConfirm}/>
                                    <Confirm id={"confirm"}
                                             open={isShowConfirm}
                                             onCancel={deleteCancel}
                                             onConfirm={() => deleteConfirm(book)}
                                    />
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

        </Item.Group>
    )
};

export default Cart
