import React, {useEffect} from 'react';
import axios from 'axios'
import {Container} from 'semantic-ui-react'

import SortPanel from '../containers/Sort'
import HeaderMenu from '../containers/Menu'
import { BooksPlate} from './index'

import 'semantic-ui-css/semantic.min.css'


function App({books, setBooks, isReady, addToCart}) {
    console.log(addToCart)

    useEffect(() => {
        axios.get('http://localhost:3001/books').then(({data}) => {
            setBooks(data)
        })
    }, []);


    return (
        <Container>
            <HeaderMenu/>
            <SortPanel/>
            <BooksPlate
                books={books}
                isReady={isReady}
                addToCart={addToCart}
            />
        </Container>
    );
}


export default App;
