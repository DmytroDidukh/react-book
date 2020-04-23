import {BookCard, HeaderMenu, SortPanel} from "../../containers";
import {Card, Dimmer, Loader, Segment, Container} from "semantic-ui-react";
import React from "react";

const Shop = ({isReady, books}) => {

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
    )
};


export default Shop;
