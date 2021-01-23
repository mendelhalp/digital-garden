import './StudyTopicBox.css';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ActiveUserContext from '../../utils/ActiveUserContext';
import { Redirect } from 'react-router-dom';

const StudyTopicBox = ({topic}) => {
    const { headline, content } = topic;
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    let editIcon = null, deleteIcon = null;
    if (activeUser.role = 'manager') {
        editIcon = <FontAwesomeIcon className='edit-icon' icon={faEdit} />;
        deleteIcon = <FontAwesomeIcon className='edit-icon' icon={faTrashAlt} />;
    }


    return (
        <div className='c-study-topic-box mb-4'>
            {deleteIcon}
            {editIcon}
            <Card.Title>{headline}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </div>
    );
}

export default StudyTopicBox;