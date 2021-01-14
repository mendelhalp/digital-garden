import React, { useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import './GalleryPage.css'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import { useParams } from 'react-router-dom';
import Parse from 'parse';
import ImageCard from '../../components/ImageCard/ImageCard';

const GalleryPage = (props) => {
    const {onLogout} = props;
    const [images, setImages] = useState([]);
    const [galleryName, setGalleryName] = useState('');

    const galleryId = useParams().id;

    useState(() => {

        async function getImages (){
            const parseGallery = await new Parse.Query(new Parse.Object.extend('Gallery')).get(galleryId);
            setGalleryName(parseGallery.get('title'));

            const Image = Parse.Object.extend('Image');
            const query = new Parse.Query(Image);
            query.equalTo("gallery", parseGallery);
            const results = await query.find();
            setImages(results.map(image => {
                const desc = image.get('desc') ? image.get('desc') : '';
                const url = image.get('file')._url;
                return({
                    'id': image.id,
                    'desc': desc,
                    'url': url
                })
            }));
            
        }
        
        getImages();
        
    },[])
    
    console.log(images);


    const imagesView = images ? images.map(image => <ImageCard image={image} key={image.id}/>) : null;
    console.log(imagesView);

    return (
        <div className='p-gallery'>
            <TopNavbar onLogout={onLogout}/>
            <h2>{galleryName}</h2>
            <CardColumns>
                {imagesView}
            </CardColumns>
        </div>
    )
}
export default GalleryPage;