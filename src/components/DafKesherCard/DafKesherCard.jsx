import './DafKesherCard.css'
import { Card, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DafKesherCard = ({dafKesher, handleEdit, handleDeleteClick, handleDuplicate, handlePublish, activeUser}) => {
    const { id, title, isReady, hebDate} = dafKesher;

    return (
        <div className='c-daf-kesher-card'>
            <Card>
                <Link to={'/dapey-kesher/' + id}>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>{hebDate}</Card.Text>
                </Link>
                {activeUser && activeUser.role === 'manager' &&
                    <Card.Footer>
                        <Col>
                            <Form.Check type='switch' variant='warning' id={`dafKesherStatus${id}`} label={isReady ? 'גלוי' : 'טיוטה'} 
                                checked={isReady} onChange={() => handlePublish(dafKesher)} />
                        </Col>
                        <Col>
                            <Col onClick={() => {handleDuplicate(dafKesher)}}>
                                <FontAwesomeIcon icon={faCopy}/>
                            </Col>
                            <Col onClick={() => {handleEdit(dafKesher)}}>
                                <FontAwesomeIcon icon={faEdit}/>
                            </Col>
                            <Col onClick={() => {handleDeleteClick(dafKesher)}}>
                                <FontAwesomeIcon icon={faTrashAlt}/>
                            </Col>
                        </Col>
                    </Card.Footer>
                }
            </Card>
            
        </div>
    );
}

export default DafKesherCard;