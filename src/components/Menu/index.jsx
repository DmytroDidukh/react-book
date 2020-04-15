import React from "react";
import {Menu, Icon} from 'semantic-ui-react'


const Nav = () => {

    return (
        <Menu>
            <Menu.Item name='store'>
                <Icon name='book'/>
                A Book Reader
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item name='total'>
                    Total:
                    <Icon name='dollar'/>
                </Menu.Item>
                <Menu.Item name='cart'>
                    <Icon name='cart'/>
                    Cart
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};

export default Nav
