import './GalleryCard.css'
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GalleryCard = ({gallery}) => {
    const {id, title, img} = gallery;
    return (
        <div className='c-gallery-card'>
            <Card>
                <Card.Img variant='top' src={img}/>
                <Card.Title className='text-center'><Link to={'/galleries/'+id}>{title}</Link></Card.Title>
            </Card>
        </div>
    )
}

export default GalleryCard;