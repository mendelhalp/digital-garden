import React from 'react';
import { Card } from 'react-bootstrap';
import './AddImageCard.css';

const AddImageCard = (props) => {
    const { onClick } = props;

    return (
        <Card className='c-add-image-card' onClick={onClick}>
            <Card.Title>+</Card.Title>
        </Card>
    );
}

export default AddImageCard;