import './DafKesherCard.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DafKesherCard = ({dafKesher, handleEdit, handleDeleteClick, activeUser}) => {
    const { id, title, hebDate} = dafKesher;

    return (
        <div className='c-daf-kesher-card'>
            <Card>
                <Link to={'/dapey-kesher/' + id}>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>{hebDate}</Card.Text>
                </Link>
                {activeUser && activeUser.role === 'manager' &&
                    <Card.Footer>
                        <Col onClick={() => {handleEdit(dafKesher)}}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Col>
                        <Col onClick={() => {handleDeleteClick(dafKesher)}}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Col>
                    </Card.Footer>
                }
            </Card>
            
        </div>
    );
}

export default DafKesherCard;