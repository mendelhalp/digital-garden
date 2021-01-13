import './GalleryCard.css'
import React from 'react';
import { Card } from 'react-bootstrap';

const GalleryCard = (props) => {
    const {title, img} = props;

    return (
        <div className='c-gallery-card'>
            <Card>
                <Card.Img variant='top' src='img'/>
                <Card.Title className='rexr-center'>{title}</Card.Title>
            </Card>
        </div>
    )
}

export default GalleryCard;