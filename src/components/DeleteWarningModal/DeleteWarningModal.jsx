

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import deleteDafKesher from '../../utils/deleteDafKesher';

function DeleteWarningModal(props) {
    const {data, objectType, show, close, cleanDataToEdit} = props;

    function handleClose() {
        close();
        cleanDataToEdit();
    }
    
    function deleteClick () {
        if (objectType === 'דף קשר') {
            deleteDafKesher(data.id);
            handleClose();
        } else {
            // deleteGallery(data.id);
            console.log('delete gallery')
        }
    }

    return (
        <div className='c-delete-warning-modal'>
            <Modal size='sm' show={show} onHide={close} backdrop="static" keyboard={false} centered>
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