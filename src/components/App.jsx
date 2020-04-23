import React, {useEffect} from 'react';
import axios from 'axios';
import {Switch, Route} from "react-router-dom";

import {Hero, Shop, Ordering} from '../pages';

import 'semantic-ui-css/semantic.min.css'


const App = ({books, setBooks, isReady}) => {

    useEffect(() => {
        axios.get('http://localhost:3001/books').then(({data}) => {
            setBooks(data)
        })
    }, []);


    return (
        <Switch>
            <Route exact path={"/"}>
                <Hero/>
            </Route>
            <Route path={"/shop"} exact>
                <Shop isReady={isReady} books={books}/>
            </Route>
            <Route path={"/checkout"}>
                <Ordering/>
            </Route>
        </Switch>
    );
};

export default App;
