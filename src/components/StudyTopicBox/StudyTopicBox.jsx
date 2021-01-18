import './StudyTopicBox.css';
import React from 'react';
import { Card } from 'react-bootstrap';

function StudyTopicBox({topic, showEdit}) {
    const {headline, content} = topic;

    const spanClass = showEdit ? 'show-edit' : null
    return (
        <div className='c-study-topic-box'>
            <Card.Title>{headline} <span className={spanClass}>x</span></Card.Title>
            <Card.Text>{content}</Card.Text>
        </div>
    );
}

export default StudyTopicBox;