import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ImageCard.css';

const ImageCard = (props) => {
    const { image, onClick, activeUser, handleDeleteClick } = props;
    return (
        <div className='c-image-card'>
            <Card>
                {image ? <Card.Img variant="top" src={image.url}  onClick={onClick} /> : null}
                {activeUser && activeUser.role === 'manager' &&                                     //showing edit icons only to garden owner
                    <Card.Footer>
                        <Col onClick={() => {handleDeleteClick(image)}}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Col>
                    </Card.Footer>}
            </Card>
        </div>
    );
}

export default ImageCard;