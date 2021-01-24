import React, { useContext, useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import './GalleryPage.css'
import { useParams } from 'react-router-dom';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import getGalleryImages from '../../utils/getGalleryImages';
import getGalleryDetails from '../../utils/getGalleryDetails';
import ActiveUserContext from '../../utils/ActiveUserContext';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';

const GalleryPage = () => {
    const activeUser = useContext(ActiveUserContext);
    const [images, setImages] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [imageToEdit, setImageToEdit] = useState('');

    const galleryId = useParams().id;

    useState(() => {

        async function getImages (){
            const images = await getGalleryImages(galleryId);
            const title = (await getGalleryDetails(galleryId)).title;
            setImages(images);
            setGalleryTitle(title);
        }
        
        getImages();
        
    },[showDeleteAlert])
    
    function onImageSelect (index) {
        setShowImageModal(true);
        setSelectedImage(index);
    }

    function onImageChange (index){
        setSelectedImage(index);
    }

    function handleDeleteClick(image) {
        setImageToEdit(image);
        setShowDeleteAlert(true);
    } 
    
    const imagesView = images ? images.map((image, index) =>
        <ImageCard image={image} key={image.id} activeUser={activeUser} onClick={() => onImageSelect(index)} handleDeleteClick={handleDeleteClick}/>) : null;

    const modalView = selectedImage !==null ? <ImageModal images={images} showModal={showImageModal}
        selectedImage={selectedImage} close={() => {setShowImageModal(false)}} onImageChange={onImageChange} /> : null;


    return (
        <div className='p-gallery'>
            <h2>{galleryTitle}</h2>
            <Container>
                <CardColumns>
                    {imagesView}
                </CardColumns>
            </Container>
            {modalView}
            <DeleteWarningModal data={imageToEdit} objectType='תמונה' showModal={showDeleteAlert}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setImageToEdit('') }} />
        </div>
    )
}
export default GalleryPage;