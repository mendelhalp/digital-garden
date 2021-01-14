import React from 'react';
import { Card } from 'react-bootstrap';

const ImageCard = ({image}) => {

    return (
        <div className='c-image-card'>
            <Card>
                <Card.Img variant="top" src={image.url} />
                {image.desc ? <Card.Footer>
                        <small className="text-muted text-center d-block">{image.desc}</small>
                </Card.Footer> : null}
            </Card>
        </div>
    );
}

export default ImageCard;