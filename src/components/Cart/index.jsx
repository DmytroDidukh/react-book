import React, {useState} from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Item, Icon, Message, Button, Confirm} from 'semantic-ui-react';
import {InputNumber} from 'antd';


import 'antd/dist/antd.css';
import './style.scss'


const Cart = ({items: booksInCart, isHidden, onCartClick, removeFromCart, changeTotalPrice}) => {
    //const [isShowConfirm, setShowConfirm] = useState(false);


    function onChange(value, book) {
        book.count = value;
        changeTotalPrice(book)
    }

    function showDeleteConfirm(book) {
        if (window.confirm(`Delete ${book.title}?`)) {
            removeFromCart(book);
        }
    }

    /* Bug with loosing current book
    function onChange(value, book) {
        book.count = value;
        changeTotalPrice(book)
    }

    function showDeleteConfirm(book) {
          removeFromCart(book);
        setShowConfirm(true)
    }

      function confirmedDelete(book) {
           removeFromCart(book);
           setShowConfirm(false)
       }

       function canceledDelete() {
           setShowConfirm(false)
       }*/


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
                                    {/*<Icon name='trash alternate outline'
                                          onClick={showDeleteConfirm}/>
                                     <Confirm id={"confirm"}
                                             open={isShowConfirm}
                                             header={book.title}
                                             onCancel={canceledDelete}
                                             onConfirm={() => confirmedDelete(book)}
                                    />*/}
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
                <Link to={"/checkout"}>
                    <Button
                        id={"checkout"} basic color='green'
                        onClick={() => onCartClick(isHidden)}>checkout</Button>
                </Link>
                : ''}
        </Item.Group>
    )
};

export default Cart
