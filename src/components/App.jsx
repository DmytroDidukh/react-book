import React, {useEffect} from 'react';
import axios from 'axios';
import {Switch, Route, Link} from "react-router-dom";
import {Card, Container, Loader, Segment, Dimmer} from 'semantic-ui-react'

import {BookCard, SortPanel, HeaderMenu} from '../containers'
import Checkout from './Checkout'

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
            <Switch>
                <Route path={"/shop"} exact>
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
                </Route>
                <Route path={"/checkout"}>
                    <Checkout/>
                </Route>
            </Switch>


        </Container>
    );
}


export default App;
