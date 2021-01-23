import './AddDafKesherCard.css'
import React from 'react';
import { Card } from 'react-bootstrap';

const AddDafKesherCard = (props) => {

    const {onClick} = props;

    return (
        <div className='c-add-daf-kesher-card'>
            <Card onClick={onClick}>
                <Card.Title className='text-center'>+</Card.Title>
            </Card>
        </div>
    );
}

export default AddDafKesherCard;