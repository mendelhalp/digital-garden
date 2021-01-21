import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const DafKesherEditorModal = (props) => {
    const { showModal /*, onSave */ /* , close */} = props;



    return (
        <div className='c-daf-kesher-editor-modal'>
            <Modal size='lg' show={showModal} /* onHide={close} */ centered>
                <Modal.Header>
                    <Modal.Title>עריכת דף קשר</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='loginUserName'>
                            <Form.Label>כותרת</Form.Label>
                            <Form.Control type="text" placeholder="כותרת" value={headline} onChange={e => { setEmail(e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId='loginPwd'>
                            <Form.Label>תוכן</Form.Label>
                            <Form.Control type="text" placeholder="תוכן" value={content} onChange={e => { setPwd(e.target.value) }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <div className='ml-auto'><Link to={'/signup'}>עדיין לא רשומים?</Link></div> */}
                    <Button variant="secondary" onClick={close}>סגירה</Button>
                    <Button variant="warning" onClick={save}>שמירה</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default DafKesherEditorModal;