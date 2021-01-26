import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import isEnterPressed from '../../utils/IsEnterPressed';
import { Link } from 'react-router-dom';
import isEmailValid from '../../utils/isEmailValid';

function LoginModal(props) {
    const {showModal, showSignupModal, handleCloseLogin, onLogin} = props;
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
        if (pwd !== ''){                                //hiding login error when retype password
            setShowError(false)
        }
    },[pwd]);
    useEffect(() => {
        setShowError(false);                            //hiding login error when changing the email
        if (!isEmailValid(email) && email !== '') {     //showing email pattern error if the email is not valid
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
            
        } catch(error) {                                //showing login error & deleting the pwd field if the login failed
            // show an error alert
            setPwd('');
            setShowError(true);
        }
    }

    function close () {
        handleCloseLogin();
        cleanFormFields();
    }

    function ifEnterPressed (event) {                   //detecting if Enter pressed and executing login
        if (isEnterPressed(event) && email){
            login();
        }
    }

    function showSignup(){
        close();
        showSignupModal();
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
                <Button variant='link' className='ml-auto' onClick={showSignup}>עדיין לא רשומים?</Button>
                <Button variant="secondary" onClick={close}>סגירה</Button>
                <Button variant="warning" onClick={login}>כניסה</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
