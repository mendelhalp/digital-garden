import React, { useContext, useEffect, useState } from 'react';
import { CardColumns, Container, Spinner } from 'react-bootstrap';
import './GalleryPage.css'
import { Redirect, useParams } from 'react-router-dom';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import getGalleryImages from '../../utils/getGalleryImages';
import getGalleryDetails from '../../utils/getGalleryDetails';
import ActiveUserContext from '../../utils/ActiveUserContext';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import AddImageCard from '../../components/ImageCard/AddImageCard';
import AddImageModal from '../../components/AddImage/AddImageModal';

const GalleryPage = () => {
    const activeUser = useContext(ActiveUserContext);
    const [images, setImages] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showAddImage, setShowAddImage] = useState(false);
    const [imageToEdit, setImageToEdit] = useState('');

    const galleryId = useParams().id;

    useEffect(() => {
        async function getImages (){
            const images = await getGalleryImages(galleryId);
            const title = (await getGalleryDetails(galleryId)).title;
            setImages(images);
            setGalleryTitle(title);
        }
        
        getImages();
        
    },[showDeleteAlert, showAddImage, imageToEdit])
    
    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
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
    
    const addImage = activeUser && activeUser.role === 'manager' && <AddImageCard onClick={() => {setShowAddImage(true)}}/>;

    const imagesView = images && images.map((image, index) =>
        <ImageCard image={image} key={image.id} activeUser={activeUser} onClick={() => onImageSelect(index)} handleDeleteClick={handleDeleteClick}/>);

    if (!galleryTitle) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }

    return (
        <div className='p-gallery'>
            <h2>{galleryTitle}</h2>
            <Container>
                <CardColumns>
                    {addImage}
                    {imagesView}
                </CardColumns>
            </Container>
            {selectedImage !== null && images.length>0 &&
                <ImageModal images={images} showModal={showImageModal} selectedImage={selectedImage} close={() => { setShowImageModal(false) }} onImageChange={onImageChange} />}
            <DeleteWarningModal data={imageToEdit} objectType='תמונה' showModal={showDeleteAlert}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setImageToEdit('') }} />
            {images && <AddImageModal galleryTitle={galleryTitle} galleryId={galleryId} showModal={showAddImage} closeModal={() => {setShowAddImage(false)}}/>}
        </div>
    )
}
export default GalleryPage;