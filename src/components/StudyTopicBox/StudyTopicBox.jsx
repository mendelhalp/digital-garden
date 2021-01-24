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

    let editIcon = null, deleteIcon = null;
    if (activeUser && activeUser.role === 'manager') {
        editIcon = <FontAwesomeIcon className='edit-icon' icon={faEdit} onClick={onEditClick} />;
        deleteIcon = <FontAwesomeIcon className='edit-icon' icon={faTrashAlt} onClick={onDeleteClick} />;
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