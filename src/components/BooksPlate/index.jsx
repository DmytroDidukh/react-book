import React, {useState} from "react";
import {Card, Icon, Image, Rating, Button} from 'semantic-ui-react'


const BooksPlate = ({books, isReady, addToCart}) => {
    //const [isInCart, setIsInCart] = useState(false);

    return (
        <Card.Group itemsPerRow={5}>

            {
                !isReady ? <Icon loading name='spinner'/>
                    : books.map((book) => (
                        <Card key={book.id}>
                            <Image src={book.image} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>{book.title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{book.author}</span>
                                </Card.Meta>
                            </Card.Content>
                            <Rating defaultRating={5} maxRating={book.rating} disabled/>

                            <Button animated='fade' onClick={() => addToCart(book)}>
                                <Button.Content visible>add to cart</Button.Content>
                                <Button.Content hidden><Icon name='dollar'/>{book.price}</Button.Content>
                            </Button>
                        </Card>
                    ))
            }
        </Card.Group>
    )
};

export default BooksPlate;
