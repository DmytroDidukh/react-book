import React from "react";
import {Menu, Icon, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import {Cart} from '../../containers'


const HeaderMenu = ({items: booksInCart, onCartClick, isHidden, totalPrice}) => {

    return (
        <Menu>
            <Link to={"/"}>
                <Menu.Item name='store'>
                    <Icon name='home'/>
                </Menu.Item>
            </Link>
            <Link to={"/shop"}>
                <Menu.Item name='store'>
                    <Icon name='book'/>
                    A Book Reader
                </Menu.Item>
            </Link>
            <Menu.Menu position='right'>
                <Menu.Item name='total'>
                    Total:
                    <Icon name='dollar'/>
                    {totalPrice}
                </Menu.Item>
                <Menu.Item name='cart' onClick={() => onCartClick(isHidden)}>
                    <Icon name='cart'/>
                    Cart
                    <Label color='red' floating>
                        {booksInCart.length}
                    </Label>
                </Menu.Item>
            </Menu.Menu>
            {isHidden && <Cart/>}
        </Menu>
    )
};

export default HeaderMenu
