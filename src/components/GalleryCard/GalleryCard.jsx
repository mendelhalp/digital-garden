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
                <Card.Img variant='top' src={mainImgUrl}/>
                <Card.Title className='text-center'><Link to={'/galleries/'+id}>{title}</Link></Card.Title>
            </Card>
        </div>
    )
}

export default GalleryCard;