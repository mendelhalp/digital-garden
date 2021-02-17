import React, { useContext, useEffect, useState } from 'react';
import { CardColumns, Container, Spinner } from 'react-bootstrap';
import './GalleryPage.css'
import { Redirect, useParams } from 'react-router-dom';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import ActiveUserContext from '../../utils/ActiveUserContext';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import AddImageCard from '../../components/ImageCard/AddImageCard';
import AddImageModal from '../../components/AddImage/AddImageModal';

const GalleryPage = ({data, onUpdate}) => {
    const activeUser = useContext(ActiveUserContext);
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showAddImage, setShowAddImage] = useState(false);
    const [imageToEdit, setImageToEdit] = useState('');

    const galleryId = useParams().id;

    if (!data) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }
    
    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const {images, title} = data.galleries[galleryId];
    
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

    function handleUpdate(action, content){
        const updatedImages = {...images};
        if (action === 'delete') {
            delete updatedImages[content.id];
        } else if (action === 'add') {
            updatedImages[content.id] = content;
        }
        const galleries = {...data.galleries};
        galleries[galleryId].images = updatedImages;
        onUpdate('galleries', galleries);
    }


    const addImage = activeUser && activeUser.role === 'manager' && <AddImageCard onClick={() => {setShowAddImage(true)}}/>;

    const imagesView = images && Object.values(images).map((image, index) =>
        <ImageCard image={image} key={image.id} activeUser={activeUser} onClick={() => onImageSelect(index)} handleDeleteClick={handleDeleteClick}/>);

    return (
        <div className='p-gallery'>
            <h2>{title}</h2>
            <Container>
                <CardColumns>
                    {addImage}
                    {imagesView}
                </CardColumns>
            </Container>
            {selectedImage !== null && images.length>0 &&
                <ImageModal images={images} showModal={showImageModal} selectedImage={selectedImage} 
                close={() => { setShowImageModal(false) }} onImageChange={onImageChange} />}
            <DeleteWarningModal data={imageToEdit} objectType='תמונה' showModal={showDeleteAlert} handleUpdate={handleUpdate}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setImageToEdit('') }} />
            {images && <AddImageModal galleryTitle={title} galleryId={galleryId} showModal={showAddImage} 
                closeModal={() => {setShowAddImage(false)}}/>}
        </div>
    )
}
export default GalleryPage;