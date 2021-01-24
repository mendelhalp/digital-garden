import './DafKesherCard.css'
import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DafKesherCard = ({dafKesher, handleEdit, handleDeleteClick, activeUser}) => {
    const { id, title, hebDate} = dafKesher;

    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <div className='c-daf-kesher-card'>
            <Card>
                <Link to={'/dapey-kesher/' + id}>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>{hebDate}</Card.Text>
                </Link>
                {activeUser && activeUser.role === 'manager' &&
                    <Card.Footer>
                        <FontAwesomeIcon className='edit-icon' onClick={() => {handleEdit(dafKesher)}} icon={faEdit}/>
                        <FontAwesomeIcon className='delete-icon' onClick={() => {handleDeleteClick(dafKesher)}} icon={faTrashAlt}/>
                    </Card.Footer>
                }
            </Card>
            
        </div>
    );
}

export default DafKesherCard;