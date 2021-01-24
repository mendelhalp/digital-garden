import './StudyTopicBox.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

const StudyTopicBox = ({topic, role, onDeleteClick}) => {
    const { headline, content } = topic;

    if (!role) {
        return <Redirect to="/"/>
    }

    let editIcon = null, deleteIcon = null;
    if (role = 'manager') {
        editIcon = <FontAwesomeIcon className='edit-icon' icon={faEdit} />;
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