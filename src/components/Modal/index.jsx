import React from 'react'
import {Button, Header, Icon, Image, Modal} from 'semantic-ui-react'

import './style.scss'


const ModalWindow = ({description, book: {title, author, image}}) => {

    return (
        <Modal id={"description-modal"}
               trigger={<Button id="book-description">read more <Icon name="hand point left outline"/></Button>}>
            <Modal.Content image scrolling>
                <Image size='medium' src={image} wrapped/>

                <Modal.Description>
                    <Header>{title} <span>by</span> <span>{author}</span></Header>
                    <p>{description.about}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <a href={description.link} target='_blank'>
                    <Button primary>
                        continue reading <Icon name='chevron right'/>
                    </Button>
                </a>
            </Modal.Actions>
        </Modal>
    )
};

export default ModalWindow;
