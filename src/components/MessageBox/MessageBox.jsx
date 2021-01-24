import './MessageBox.css';
import { Card } from 'react-bootstrap';
import getRandomBgColor from '../../utils/getRandomBgColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

const MessageBox = ({topic, role, onDeleteClick, onEditClick}) => {
    const { headline, content } = topic;
    
    const bgColor = getRandomBgColor();

    if (!role) {
        return <Redirect to="/"/>
    }
    let editIcon = null, deleteIcon = null;
    if (role === 'manager') {
        editIcon = <FontAwesomeIcon className='edit-icon' icon={faEdit} onClick={onEditClick} />;
        deleteIcon = <FontAwesomeIcon className='edit-icon' icon={faTrashAlt} onClick={onDeleteClick} />;
    }    

    return (
        <Card className='c-message-box m-2' bg={bgColor} text={bgColor === 'light' ? 'dark' : 'white'}>
            <Card.Body>
                {deleteIcon}
                {editIcon}
                <Card.Title>{headline}</Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MessageBox;