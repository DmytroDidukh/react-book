import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Card, Image, Rating, Button, Icon} from 'semantic-ui-react'

import ModalWindow from "../Modal";

import './style.scss'


const BookCard = ({book, addToCart, isInCart}) => {
    const {id, title, author, image, rating, price} = book;
    const [description, setDescription] = useState('1');

    useEffect(() => {
        axios.get('http://localhost:3001/description/' + book.id)
            .then(({data}) => setDescription(data));
    }, [])


    return (
        <Card key={id}>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>

                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                    <ModalWindow id={"description"} description={description} book={book}/>
                </Card.Meta>
            </Card.Content>
            <Rating defaultRating={5} maxRating={rating} disabled/>
            {
                !isInCart ?
                    <Button onClick={() => {
                        addToCart(book)
                    }} animated='fade'>
                        <Button.Content visible>
                            <Icon name='dollar'/>{price}
                            <Icon name='shop'/>
                        </Button.Content>
                        <Button.Content hidden>add to cart</Button.Content>
                    </Button>
                    :
                    <Button disabled>in cart</Button>
            }
        </Card>
    )
};

export default BookCard;
