import './AddStudyTopicBox.css';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import { Redirect } from 'react-router-dom';

const AddStudyTopicBox = ({onClick}) => {
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className='c-add-study-topic-box text-center' onClick={onClick}>
            <Card.Title>+</Card.Title>
        </div>
    );
}

export default AddStudyTopicBox;