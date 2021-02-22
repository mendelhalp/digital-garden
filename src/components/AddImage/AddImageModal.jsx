
import React, { useState } from 'react';
import { Button, Card, CardColumns, Form, Modal, Spinner } from 'react-bootstrap';
import addImage from '../../utils/addImage';
import deleteImage from '../../utils/deleteImage';
import ImageModel from '../../model/ImageModel'

function AddImageModal(props) {
    const {galleryTitle, galleryId, showModal, closeModal, handleUpdate} = props;
    const [images, setImages] = useState('');
    const [imagesUrl, setImagesUrl] = useState([]);

    function handleClose() {
        closeModal();
        setImages('');
        setImagesUrl([]);
    }
    
    function onFilesSelect(event) {
        const newImages = Object.values(event.target.files);
        let newImagesUrl = newImages.map(image => URL.createObjectURL(image));
        setImages(newImages);
        setImagesUrl(newImagesUrl);
    }

    function closeClicked() {
        imagesUrl.forEach(url => {URL.revokeObjectURL(url)});
        handleClose()
    }
    
    async function addClicked() {
        const uploadedImages = await Promise.all(images.map(async image => {
            const res = await addImage(image, galleryId);
            return (new ImageModel(res));
        }));
        handleUpdate('add', uploadedImages);
        handleClose();
    }
    
    const imagesAmount = images ? images.length : 0;

    const imagesView = imagesUrl ? imagesUrl.map((imageUrl, index) =>
        <Card key={index}>
            <Card.Img src={imageUrl}/>
        </Card>
    ) : null;

    return (
        <Modal className='c-add-image-modal' size={'md'} show={showModal} onHide={handleClose} centered backdrop="static" keyboard={false}>
            <Modal.Header>
                <Modal.Title>הוספת תמונות לגלריה <span className='font-weight-bold'>{galleryTitle}</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.File id="formFiles" label={images ? 'filesNames' : 'בחירת קבצים'} data-browse="בחירת קבצים" accept="image/*" custom multiple onChange={onFilesSelect}/>
                    <Form.Text className="text-muted">{imagesAmount >0 ? `נבחרו ${imagesAmount} קבצים` : 'ניתן לבחור מספר קבצים יחד'}</Form.Text>
                    <CardColumns>
                        {imagesView}
                    </CardColumns>
                    {images && imagesView.length === 0 && 
                        <div className='images-spinner row justify-content-center mt-3'>
                            <Spinner animation="border" variant="warning" />
                        </div>
                    }
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeClicked} disabled={images && imagesView.length === 0}>ביטול</Button>
                <Button variant="warning" onClick={addClicked} disabled={imagesView.length === 0}>הוספה</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddImageModal;