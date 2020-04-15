import React, {useEffect} from 'react';
import axios from 'axios'
import {Container} from 'semantic-ui-react'

import SortPanel from '../containers/Sort'
import {Menu, BooksPlate} from './index'

import 'semantic-ui-css/semantic.min.css'


function App({books, setBooks, isReady}) {

    useEffect(() => {
        axios.get('http://localhost:3001/books').then(({data}) => {
            setBooks(data)
        })
    }, []);


    return (
        <Container>
            <Menu/>
            <SortPanel/>
            <BooksPlate books={books} isReady={isReady}/>
        </Container>
    );
}


export default App;
