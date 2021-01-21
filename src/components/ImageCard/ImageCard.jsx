import React from 'react';
import { Card } from 'react-bootstrap';
import './ImageCard.css';

const ImageCard = ({image, onClick}) => {

    return (
        <div className='c-image-card'>
            <Card onClick={onClick}>
                {image ? <Card.Img variant="top" src={image.url} /> : null}
                {image.desc ? <Card.Footer>
                        <small className="text-muted text-center d-block">{image.desc}</small>
                </Card.Footer> : null}
            </Card>
        </div>
    );
}

export default ImageCard;