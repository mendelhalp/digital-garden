import './GalleryCard.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getGalleryMainImg from '../../utils/getGalleryMainImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const GalleryCard = ({gallery, handleEdit, handleDeleteClick, activeUser}) => {
    const {id, title } = gallery;
    const [mainImg, setMainImg] = useState('');

    useEffect(() => {
        async function getMainImg() {
            const mainImg = await getGalleryMainImg(id);
            setMainImg(mainImg);
        }
        getMainImg();
    },[]);


    return (
        <div className='c-gallery-card'>
            <Card>
                <Link to={'/galleries/'+ id}>
                    {mainImg ? <Card.Img variant='top' src={mainImg}/> : null}
                    <Card.Title className='text-center'>{title}</Card.Title>
                </Link>
                {activeUser && activeUser.role === 'manager' && handleEdit &&
                    <Card.Footer>
                        <FontAwesomeIcon className='edit-icon' onClick={() => {handleEdit(gallery)}} icon={faEdit}/>
                        <FontAwesomeIcon className='delete-icon' onClick={() => {handleDeleteClick(gallery)}} icon={faTrashAlt}/>
                    </Card.Footer>
                }
            </Card>
        </div>
    )
}

export default GalleryCard;