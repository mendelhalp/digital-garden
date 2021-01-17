import './GalleryCard.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getGalleryMainImg from '../../utils/getGalleryMainImg';

const GalleryCard = ({gallery}) => {
    const {id, title} = gallery;
    const [mainImgUrl, setMainImgUrl] = useState('');

    useEffect(() => {
        async function getImg() {
            const img = await getGalleryMainImg(id);
            setMainImgUrl(img)
        }
        getImg()
    },[])

    return (
        <div className='c-gallery-card'>
            <Card>
                <Link to={'/galleries/'+id}>
                    <Card.Img variant='top' src={mainImgUrl}/>
                    <Card.Title className='text-center'>{title}</Card.Title>
                </Link>
            </Card>
        </div>
    )
}

export default GalleryCard;