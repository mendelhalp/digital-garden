import './GalleryCard.css'
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GalleryCard = ({gallery}) => {
    const {parseGallery, name, mainImg } = gallery;

    return (
        <div className='c-gallery-card'>
            <Card>
                <Link to={'/galleries/'+parseGallery.id}>
                    <Card.Img variant='top' src={mainImg}/>
                    <Card.Title className='text-center'>{name}</Card.Title>
                </Link>
            </Card>
        </div>
    )
}

export default GalleryCard;