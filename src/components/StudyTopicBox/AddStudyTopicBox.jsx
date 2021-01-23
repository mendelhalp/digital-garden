import './AddStudyTopicBox.css';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import { Redirect } from 'react-router-dom';

const AddStudyTopicBox = () => {
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className='c-add-study-topic-box text-center'>
            <Card.Title>+</Card.Title>
        </div>
    );
}

export default AddStudyTopicBox;