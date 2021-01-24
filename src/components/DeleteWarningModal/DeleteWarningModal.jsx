import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import deleteDafKesher from '../../utils/deleteDafKesher';
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
            // deleteGallery(data.id);
            handleClose();
            console.log('delete gallery')
        } else if (objectType === 'חומר לימודי' || objectType === 'הודעה') {
            fullData[data.type].splice(data.index, 1);
            updateDafKesherContent(dafKesherId, fullData);
            console.log(fullData);
            handleClose();
        }
    }

    return (
        <div className='c-delete-warning-modal'>
            <Modal size='sm' show={showModal} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>מחיקת {objectType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>הנך מנסה למחוק {objectType} {data.title}, פעולה זו איננה ניתנת לביטול</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>ביטול</Button>
                    <Button variant="warning" onClick={deleteClick}>מחיקה</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteWarningModal;