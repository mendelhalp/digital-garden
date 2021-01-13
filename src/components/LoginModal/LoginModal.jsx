import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


function LoginModal(props) {
    const {show, handleCloseLogin} = props;

    return (
        <div className='c-login-modal'>
            <Modal size='sm' show={show} onHide={handleCloseLogin} centered>
                <Modal.Header>
                    <Modal.Title>כניסה</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="email" placeholder="דואר אלקטרוני" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="סיסמה" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogin}>סגירה</Button>
                    <Button variant="primary" onClick={handleCloseLogin}>כניסה</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LoginModal;
