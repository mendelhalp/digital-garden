import './StudyTopicBox.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

const StudyTopicBox = ({topic, activeUser, onDeleteClick, onEditClick}) => {
    const { headline, content } = topic;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const editIcon = 
        <div>
            <FontAwesomeIcon className='edit-icon' icon={faEdit} onClick={onEditClick} />;
            <FontAwesomeIcon className='edit-icon' icon={faTrashAlt} onClick={onDeleteClick} />;
        </div>

    return (
        <div className='c-study-topic-box mb-4'>
            {activeUser && activeUser.role === 'manager' && editIcon}
            <Card.Title>{headline}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </div>
    );
}

export default StudyTopicBox;