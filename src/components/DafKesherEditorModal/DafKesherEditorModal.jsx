import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import updateDafKesherContent from '../../utils/updateDafKesherContent';


const DafKesherEditorModal = (props) => {
    const { dafKesherId, fullData, data, showModal, closeModal, cleanDataToEdit } = props;
    const [headline, setHeadline] = useState();
    const [content, setContent] = useState();
    const [showError, setShowError] = useState(false);

    useEffect(() => { 
        const type = typeof data;
        if (type === 'object') {
            setHeadline(fullData[data.type][data.index].headline);
            setContent(fullData[data.type][data.index].content);
        } else {
            setHeadline('');
            setContent('');
        }
    }, [data]);

    function close () {
        closeModal();
        setShowError(false);
        cleanDataToEdit();
    }

    function onSave() {
        if (!(headline && content)) {
            setShowError(true);
        } else if (typeof data !== 'object') {
            let newData = { ...fullData };
            newData[data].push({ headline: headline, content: content });
            updateDafKesherContent(dafKesherId, newData);
            close()
        } else {
            let newData = { ...fullData };
            newData[data.type][data.index].headline = headline;
            newData[data.type][data.index].content = content;
            updateDafKesherContent(dafKesherId, newData);
            close();
        }
    }


    const modalTitle = (typeof data) === 'object' ? 'עריכת תוכן דף קשר' : 'הוספת תוכן חדש';

    return (
        <div className='c-daf-kesher-editor-modal'>
            <Modal size='md' show={showModal} onHide={close} centered>
                <Modal.Header>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId='headline'>
                        <Form.Label>כותרת</Form.Label>
                        <Form.Control type="text" value={headline} onChange={e => { setHeadline(e.target.value) }} />
                    </Form.Group>
                    <Form.Group controlId='content'>
                        <Form.Label>תוכן</Form.Label>
                            <Form.Control as="textarea" rows={5} value={content} onChange={e => {setContent(e.target.value)}} />
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

export default DafKesherEditorModal;