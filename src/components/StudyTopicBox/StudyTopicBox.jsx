import './StudyTopicBox.css';
import React from 'react';
import { Card } from 'react-bootstrap';

const StudyTopicBox = ({topic}) => {
    const {headline, content} = topic;

    return (
        <div className='c-study-topic-box mb-4'>
            <Card.Title>{headline}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </div>
    );
}

export default StudyTopicBox;