import React, {useEffect} from 'react';
import axios from 'axios'
import {Card, Container, Loader, Segment, Dimmer, Image} from 'semantic-ui-react'

import {BookCard, SortPanel, HeaderMenu} from '../containers'

import 'semantic-ui-css/semantic.min.css'


function App({books, setBooks, isReady}) {

    useEffect(() => {
        axios.get('http://localhost:3001/books').then(({data}) => {
            setBooks(data)
        })
    }, []);


    return (
        <Container>
            <HeaderMenu/>
            <SortPanel/>
            <Card.Group itemsPerRow={5}>
                {!isReady ?
                    <Segment>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>
                    </Segment>
                    :
                    books.map(book => (
                        <BookCard key={book.id} book={book}/>
                    ))
                }
            </Card.Group>
        </Container>
    );
}


export default App;
