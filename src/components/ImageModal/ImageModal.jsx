import React from 'react';
import { Button, Col, Image, Modal } from 'react-bootstrap';
import './ImageModal.css'

const ImageModal = (props) => {
    const { images, showModal, selectedImage, close, onImageChange } = props;

    function nextImage() {
        if (selectedImage === images.length - 1) {
            onImageChange(0);
        } else {
            onImageChange(selectedImage + 1);
        }
    }

    function prevImage() {
        if (selectedImage === 0) {
            onImageChange(images.length - 1);
        } else {
            onImageChange(selectedImage - 1);
        }
    }

    return (
        <Modal size='md' show={showModal} onHide={close} centered className='c-image-modal'>
            <Modal.Body className='p-0 row'>
                <Col xs={1} className='prev'>
                    <a className='prev' variant='dark' onClick={prevImage}>&#10094;</a>
                </Col>
                <Col xs={10} className='p-0'>
                    <Image src={images[selectedImage].url} />
                    <Button onClick={close} className='modal-x-button' variant='outline-warning'>X</Button>
                </Col>
                <Col xs={1} className='next'>
                    <a className='next' variant='dark' onClick={nextImage}>&#10095;</a>
                </Col>
            </Modal.Body>
        </Modal>
    );
}

export default ImageModal;