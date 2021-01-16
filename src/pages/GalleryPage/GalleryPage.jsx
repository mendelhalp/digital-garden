import React, { useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import './GalleryPage.css'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import { useParams } from 'react-router-dom';
import Parse from 'parse';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';

const GalleryPage = (props) => {
    const {onLogout} = props;
    const [images, setImages] = useState([]);
    const [galleryName, setGalleryName] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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
    
    function onImageSelect (index) {
        setShowImageModal(true);
        setSelectedImage(index);
    }

    function onImageChange (index){
        setSelectedImage(index);
    }

    
    const imagesView = images ? images.map((image, index) => <ImageCard image={image} key={image.id} onClick={() => onImageSelect(index)}/>) : null;

    const modalView = selectedImage !==null ? <ImageModal images={images} showModal={showImageModal}
        selectedImage={selectedImage} close={() => {setShowImageModal(false)}} onImageChange={onImageChange} /> : null;


    return (
        <div className='p-gallery'>
            <TopNavbar onLogout={onLogout}/>
            <h2>{galleryName}</h2>
            <Container>
                <CardColumns>
                    {imagesView}
                </CardColumns>
            </Container>
            {modalView}
        </div>
    )
}
export default GalleryPage;