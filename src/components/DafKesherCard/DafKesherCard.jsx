import './DafKesherCard.css'
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DafKesherCard = ({dafKesher}) => {
    const {id, title, date} = dafKesher;

    return (
        <div className='c-daf-kesher-card'>
            <Card>
                <Link to={'/dapey-kesher/'+id}>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>{date}</Card.Text>
                </Link>
            </Card>
        </div>
    );
}

export default DafKesherCard;