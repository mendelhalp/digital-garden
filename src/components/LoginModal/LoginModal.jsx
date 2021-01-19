import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import isEnterPressed from '../../utils/IsEnterPressed';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        if (pwd !== ''){
            setShowError(false)
        }
    },[pwd]);
    useEffect(() => {
        setShowError(false);
    },[email]);

    async function login () {
        try {
            const parseUser = await Parse.User.logIn(email, pwd);
            
            // Trigger onLogin event and clean the fields
            onLogin(new UserModel(parseUser));
            handleCloseLogin();
            cleanFormFields();
            
        } catch(error) {
            // show an error alert
            setPwd('');
            setShowError(true);
        }
    }

    function close () {
        handleCloseLogin();
        cleanFormFields();
    }

    function ifEnterPressed (event) {
        if (isEnterPressed(event) && email){
            login();
        }
    }

    return (
        <div className='c-login-modal'>
            <Modal size='md' show={showModal} onHide={close} centered>
                <Modal.Header>
                    <Modal.Title>כניסה</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='loginUserName'>
                            <Form.Label>שם משתמש</Form.Label>
                            <Form.Control type="email" placeholder="דואר אלקטרוני" value={email} lang="en"
                                onChange={e => {setEmail(e.target.value)}}  onKeyPress={ifEnterPressed}/>
                        </Form.Group>
                        <Form.Group controlId='loginPwd'>
                            <Form.Label>סיסמה</Form.Label>
                            <Form.Control type="password" placeholder="סיסמה" value={pwd}
                                onChange={e => {setPwd(e.target.value)}}  onKeyPress={ifEnterPressed}/>
                        </Form.Group>
                        <div className='mt-auto'><Link to={'/signup'}>עדיין לא רשומים?</Link></div>
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
