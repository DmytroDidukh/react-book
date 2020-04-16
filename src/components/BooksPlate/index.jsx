import React from "react";
import {Card, Icon, Image, Rating, Button} from 'semantic-ui-react'


const BooksPlate = ({books, isReady}) => {
    return (
        <Card.Group itemsPerRow={5}>

            {
                !isReady ? <Icon loading name='spinner' />
                    : books.map(({id, title, author, image, price, rating}) => (
                        <Card key={id}>
                            <Image src={image} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>{title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{author}</span>
                                </Card.Meta>
                            </Card.Content>
                          {/*  <Card.Content extra>
                                <a href="#">
                                    <Icon name='dollar'/>
                                    {price}
                                </a>
                            </Card.Content>*/}
                           <Rating defaultRating={5} maxRating={rating} disabled />
                            <Button animated='fade'>
                                <Button.Content visible>add to cart</Button.Content>
                                <Button.Content hidden><Icon name='dollar'/>{price}</Button.Content>
                            </Button>
                        </Card>
                    ))
            }
        </Card.Group>
    )
};

export default BooksPlate;
