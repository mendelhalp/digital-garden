import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import deleteDafKesher from '../../utils/deleteDafKesher';
import deleteGallery from '../../utils/deleteGallery';
import deleteImage from '../../utils/deleteImage';
import updateDafKesherContent from '../../utils/updateDafKesherContent';

function DeleteWarningModal(props) {
    const {fullData, data, dafKesherId, objectType, showModal, closeModal, cleanDataToEdit, handleUpdate} = props;
    function handleClose() {
        closeModal();
        cleanDataToEdit();
    }

    async function deleteClick () {
        if (objectType === 'דף קשר') {
            const res = await deleteDafKesher(data.id);
            handleUpdate('delete', res);
            handleClose();

        } else if (objectType === 'גלריה') {
            const res = await deleteGallery(data.id);
            handleUpdate('delete', res);
            handleClose();

        } else if (objectType === 'תמונה') {
            const res = await deleteImage(data.id);
            handleUpdate('delete', res);
            handleClose();
        } else if (objectType === 'חומר לימודי' || objectType === 'הודעה') {
            const newData = {...fullData};
            newData[data.type] = [...fullData[data.type]];
            newData[data.type].splice(data.index, 1);
            updateDafKesherContent(dafKesherId, newData).then(() => {
                handleUpdate(data.type, newData[data.type]);
                handleClose();
            })
        }
    }

    return (
        <Modal size='md' show={showModal} onHide={handleClose} backdrop="static" keyboard={false} centered className='c-delete-warning-modal'>
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
    );
}

export default DeleteWarningModal;