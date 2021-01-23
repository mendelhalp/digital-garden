import './MessageBox.css';
import { Card } from 'react-bootstrap';
import getRandomBgColor from '../../utils/getRandomBgColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ActiveUserContext from '../../utils/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';

const MessageBox = ({topic}) => {
    const { headline, content } = topic;
    const activeUser = useContext(ActiveUserContext);
    
    const bgColor = getRandomBgColor();

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    let editIcon = null, deleteIcon = null;
    if (activeUser.role === 'manager') {
        editIcon = <FontAwesomeIcon className='edit-icon' icon={faEdit} />;
        deleteIcon = <FontAwesomeIcon className='edit-icon' icon={faTrashAlt} />;
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