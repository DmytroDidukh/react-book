import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import {Container} from 'semantic-ui-react'


import {Menu, BooksPlate} from './components'
import {setBooks} from './actions/books'

import 'semantic-ui-css/semantic.min.css'


function App({books, setNewBooks, isReady}) {

    useEffect(() => {
        axios.get('http://localhost:3001/books').then(({data}) => {
            setNewBooks(data)
        })
    }, []);


    return (
        <Container>
            <Menu/>
            <BooksPlate books={books} isReady={isReady}/>
        </Container>
    );
}

const mapStateToProps = ({books: {items, isReady}}) => {

    return {books: items, isReady: isReady}
};

const mapDispatchToProps = (dispatch) => {
    return {setNewBooks: books => dispatch(setBooks(books))}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
