import './MessageBox.css';
import { Card } from 'react-bootstrap';

const MessageBox = ({topic, showEdit, bg}) => {
    const {headline, content} = topic;

    const spanClass = showEdit ? 'show-edit' : null
    return (
        <Card className='c-message-box m-2' bg={bg} text={bg === 'light' ? 'dark' : 'white'}>
            <Card.Body>
                <Card.Title>{headline} <span className={spanClass}>x</span></Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MessageBox;