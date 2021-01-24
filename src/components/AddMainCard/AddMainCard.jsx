import './AddMainCard.css'
import React from 'react';
import { Card } from 'react-bootstrap';

const AddMainCard = (props) => {

    const {onClick} = props;

    return (
        <div className='c-add-main-card'>
            <Card onClick={onClick}>
                <Card.Title className='text-center'>+</Card.Title>
            </Card>
        </div>
    );
}

export default AddMainCard;