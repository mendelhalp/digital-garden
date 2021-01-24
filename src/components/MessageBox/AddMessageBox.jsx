import './AddMessageBox.css';
import { Card } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';

const AddMessageBox = ({onClick}) => {
    
    const activeUser = useContext(ActiveUserContext);
    
    
    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    return (
        <Card className='c-add-message-box m-2 text-center' bg={'light'} text={'dark'} onClick={onClick}>
            <Card.Body>
                <Card.Title>+</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default AddMessageBox;