import React from "react";
import {Input, Menu} from 'semantic-ui-react'

const SortPanel = ({sort, sortBy, searchQuery}) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={sortBy === 'all'}
                onClick={() => sort('all')}
            />
            <Menu.Item
                name='popular'
                active={sortBy === 'popular'}
                onClick={() => sort('popular')}
            />
            <Menu.Item
                name='by author'
                active={sortBy === 'by author'}
                onClick={() => sort('by author')}
            />
            <Menu.Item
                name='price_high'
                active={sortBy === 'price_high'}
                onClick={() => sort('price_high')}
            />
            <Menu.Item
                name='price_low'
                active={sortBy === 'price_low'}
                onClick={() => sort('price_low')}
            />
            <Menu.Item>
                <Input icon='search' placeholder='Search...'
                       onChange={(e) => searchQuery(e.target.value)}
                />
            </Menu.Item>


        </Menu>
    )
};


export default SortPanel;
