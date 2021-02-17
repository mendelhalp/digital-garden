
import React, { useState } from 'react';
import { Button, Card, CardColumns, Form, Modal, Spinner } from 'react-bootstrap';
import addImage from '../../utils/addImage';
import deleteImage from '../../utils/deleteImage';
import ImageModel from '../../model/ImageModel'

function AddImageModal(props) {
    const {galleryTitle, galleryId, showModal, closeModal, handleUpdate} = props;
    const [images, setImages] = useState('');
    const [imagesId, setImagesId] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);

    function handleClose() {
        closeModal();
        setImages('');
        setImagesId([]);
        setImagesUrl([]);
    }
    
    async function onFilesSelect(event) {
        const imagesArr = Object.values(event.target.files);
        let newImagesId = [];
        let newImagesUrl = [];
        const uploadedImages = await Promise.all(imagesArr.map(async image => {
            const res = await addImage(image, galleryId);
            newImagesId.push(res.id);
            newImagesUrl.push(res.get('file')._url);
            return (new ImageModel(res));
        }));
        setImages(uploadedImages);
        setImagesId(newImagesId);
        setImagesUrl(newImagesUrl);
    }
    
    function closeClicked() {
        imagesId && imagesId.map(image => {
            deleteImage(image);
        });
        handleClose();
    }
    
    function addClicked() {
        handleClose();
        handleUpdate('add', images);
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