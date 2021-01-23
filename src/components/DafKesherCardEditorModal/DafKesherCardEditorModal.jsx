import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import createNewDafKesher from '../../utils/createNewDafKesher';
import isEnterPressed from '../../utils/IsEnterPressed';

const DafKesherCardEditorModal = (props) => {
    const {data, parseGarden, showModal, handleCloseLogin} = props;
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [showError, setShowError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);

    useEffect(() => { 
        
    },[]);

    function cleanFormFields () {
        setTitle('');
        setDate('');
        setShowError(false);
    }


    function close () {
        handleCloseLogin();
        cleanFormFields();
    }

    function onSave() {
        if (!(title, date)) {
            setShowError(true);
        } else {
            createNewDafKesher(parseGarden, title, date);
            close()
        }
    }

    function ifEnterPressed (event) {
        if (isEnterPressed(event) && title && date){
            onSave();
        }
    }

    return (
        <div className='c-daf-kesher-card-editor-modal'>
            <Modal size='sm' show={showModal} onHide={close} centered>
                <Modal.Header>
                    <Modal.Title>יצירת דף קשר חדש</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='title'>
                            <Form.Label>כותרת</Form.Label>
                            <Form.Control type="text" value={title} onChange={e => { setTitle(e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId='date'>
                            <Form.Label>תאריך</Form.Label>
                            <Form.Control type="date" value={date}
                                onChange={e => {setDate(e.target.value)}}  onKeyPress={ifEnterPressed}/>
                        </Form.Group>
                    </Form>
                    {showError ? <Alert variant="danger">נא למלא את כל השדות</Alert> : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>סגירה</Button>
                    <Button variant="warning" onClick={onSave}>שמירה</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DafKesherCardEditorModal;
