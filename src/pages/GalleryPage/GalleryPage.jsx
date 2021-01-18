import React, { useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import './GalleryPage.css'
import { useParams } from 'react-router-dom';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import getGalleryImages from '../../utils/getGalleryImages';
import getGalleryDetails from '../../utils/getGalleryDetails';

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const [galleryName, setGalleryName] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryId = useParams().id;

    useState(() => {

        async function getImages (){
            const images = await getGalleryImages(galleryId);
            const name = (await getGalleryDetails(galleryId)).name;
            setImages(images);
            setGalleryName(name);
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