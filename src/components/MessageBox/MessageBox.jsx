import './MessageBox.css';
import { Card } from 'react-bootstrap';
import getRandomBgColor from '../../utils/getRandomBgColor';

const MessageBox = ({topic}) => {
    const { headline, content } = topic;
    
    const bgColor = getRandomBgColor();

    return (
        <Card className='c-message-box m-2' bg={bgColor} text={bgColor === 'light' ? 'dark' : 'white'}>
            <Card.Body>
                <Card.Title>{headline}</Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MessageBox;