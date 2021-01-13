import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../../model/UserModel';

function LoginModal(props) {
    const {showModal, handleCloseLogin, onLogin} = props;
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showError, setShowError] = useState(false);

    function cleanFormFields () {
        setEmail('');
        setPwd('');
        setShowError(false);
    }

    async function login () {
        try {
            const parseUser = await Parse.User.logIn(email, pwd);
            
            // Trigger onLogin event and clean the fields
            onLogin(new UserModel(parseUser));
            handleCloseLogin();
            cleanFormFields();
            
        } catch(error) {
            // show an error alert
            setShowError(true);
        }
    }

    function close () {
        handleCloseLogin();
        cleanFormFields();
    }

    return (
        <div className='c-login-modal'>
            <Modal size='sm' show={showModal} onHide={close} centered>
                <Modal.Header>
                    <Modal.Title>כניסה</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="email" placeholder="דואר אלקטרוני" value={email} onChange={e => {setEmail(e.target.value)}} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="סיסמה" value={pwd} onChange={e => {setPwd(e.target.value)}} />
                        </Form.Group>
                    </Form>
                    {showError ? <Alert variant="danger">מייל או סיסמה שגויים</Alert> : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>סגירה</Button>
                    <Button variant="primary" onClick={login}>כניסה</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LoginModal;
