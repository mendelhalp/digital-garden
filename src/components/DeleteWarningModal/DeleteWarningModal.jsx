import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import deleteDafKesher from '../../utils/deleteDafKesher';
import deleteGallery from '../../utils/deleteGallery';
import deleteImage from '../../utils/deleteImage';
import updateDafKesherContent from '../../utils/updateDafKesherContent';

function DeleteWarningModal(props) {
    const {fullData, data, dafKesherId, objectType, showModal, closeModal, cleanDataToEdit} = props;
    function handleClose() {
        closeModal();
        cleanDataToEdit();
    }
    
    function deleteClick () {
        if (objectType === 'דף קשר') {
            deleteDafKesher(data.id);
            handleClose();
        } else if (objectType === 'גלריה') {
            deleteGallery(data.id);
            handleClose();
        } else if (objectType === 'חומר לימודי' || objectType === 'הודעה') {
            fullData[data.type].splice(data.index, 1);
            updateDafKesherContent(dafKesherId, fullData);
            handleClose();
        } else if (objectType === 'תמונה') {
            deleteImage(data.id);
            handleClose();
        }
    }

    return (
        <div className='c-delete-warning-modal'>
            <Modal size='md' show={showModal} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>מחיקת {objectType}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <h5>הנך מנסה למחוק {objectType}{data.title && <span className='font-weight-bold'> {data.title}</span>},</h5>
                    <div>פעולה זו איננה ניתנת לביטול</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>ביטול</Button>
                    <Button variant="warning" onClick={deleteClick}>מחיקה</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteWarningModal;