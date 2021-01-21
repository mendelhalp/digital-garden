import './GalleryCard.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getGalleryMainImg from '../../utils/getGalleryMainImg';

const GalleryCard = ({gallery}) => {
    const {id, name } = gallery;
    const [mainImg, setMainImg] = useState('');

    useEffect(() => {
        async function getMainImg() {
            const mainImg = await getGalleryMainImg(id);
            setMainImg(mainImg);
        }
        getMainImg()
    });


    return (
        <div className='c-gallery-card'>
            <Card>
                <Link to={'/galleries/'+ id}>
                    {mainImg ? <Card.Img variant='top' src={mainImg}/> : null}
                    <Card.Title className='text-center'>{name}</Card.Title>
                </Link>
            </Card>
        </div>
    )
}

export default GalleryCard;