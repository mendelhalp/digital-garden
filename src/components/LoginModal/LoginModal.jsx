import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import isEnterPressed from '../../utils/IsEnterPressed';
import { Link } from 'react-router-dom';
import isEmailValid from '../../utils/isEmailValid';

function LoginModal(props) {
    const {showModal, handleCloseLogin, onLogin} = props;
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showError, setShowError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);

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
        if (!isEmailValid(email) && email !== '') {
            setShowEmailError(true);
        } else if (isEmailValid(email)) { 
            setShowEmailError(false);
        }
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
        <Modal size='md' show={showModal} onHide={close} centered className='c-login-modal'>
            <Modal.Header>
                <Modal.Title>כניסה</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='loginUserName'>
                        <Form.Label>שם משתמש</Form.Label>
                        <Form.Control type="email" placeholder="דואר אלקטרוני" value={email} className={showEmailError ? 'is-invalid' : null}
                            onChange={e => { setEmail(e.target.value) }} onKeyPress={ifEnterPressed} />
                        <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='loginPwd'>
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control type="password" placeholder="סיסמה" value={pwd}
                            onChange={e => {setPwd(e.target.value)}}  onKeyPress={ifEnterPressed}/>
                    </Form.Group>
                </Form>
                {showError ? <Alert variant="danger">מייל או סיסמה שגויים</Alert> : null}
            </Modal.Body>
            <Modal.Footer>
                <Button as='a' variant='link' className='ml-auto'><Link to={'/signup'}>עדיין לא רשומים?</Link></Button>
                <Button variant="secondary" onClick={close}>סגירה</Button>
                <Button variant="warning" onClick={login}>כניסה</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
