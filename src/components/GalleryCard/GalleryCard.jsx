import './GalleryCard.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const GalleryCard = ({gallery, handleEdit, handleDeleteClick, activeUser}) => {
    const {id, title } = gallery;

    const img = gallery.images && Object.values(gallery.images).map(img => img.url)[0];

    return (
        <div className='c-gallery-card'>
            <Card>
                <Link to={'/galleries/'+ id}>
                    {img ? <Card.Img variant='top' src={img}/> : null}
                    <Card.Title className='text-center'>{title}</Card.Title>
                </Link>
                {activeUser && activeUser.role === 'manager' &&         //showing edit icons only to garden owner
                    <Card.Footer>
                        <Col onClick={() => {handleEdit(gallery)}}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Col>
                        <Col onClick={() => {handleDeleteClick(gallery)}}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Col>
                    </Card.Footer>
                }
            </Card>
        </div>
    )
}

export default GalleryCard;