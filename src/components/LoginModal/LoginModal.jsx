import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Alert, Card } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import isEnterPressed from '../../utils/IsEnterPressed';
import isEmailValid from '../../utils/isEmailValid';

function LoginModal(props) {
    const {showModal, showSignupModal, handleCloseLogin, onLogin} = props;
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showError, setShowError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [forgotPwdEmail, setForgotPwdEmail] = useState('');
    const [showForgotPwdEmail, setShowForgotPwdEmail] = useState(false);
    const [showForgotPwdEmailError, setShowForgotPwdEmailError] = useState(false);
    const [showResetsecces, setShowResetsecces] = useState(false);

    function cleanFormFields () {
        setEmail('');
        setPwd('');
        setShowError(false);
        setForgotPwdEmail('');
        setShowForgotPwdEmail(false);
        setShowForgotPwdEmailError(false);
        setShowResetsecces(false);
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
            setForgotPwdEmail(email);
        }
    },[email]);
    useEffect(() => {
        if (!isEmailValid(forgotPwdEmail) && forgotPwdEmail !== '') {     //showing email pattern error if the email is not valid
            setShowForgotPwdEmailError(true);
        } else if (isEmailValid(forgotPwdEmail)) { 
            setShowForgotPwdEmailError(false);
        }
    },[forgotPwdEmail]);

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
    
    function handleForgotPassword(){                                        //giving option to reset password
        Parse.User.requestPasswordReset("email@example.com").then(() => {
            // Password reset request was sent successfully
            if (typeof document !== 'undefined') {
                setShowResetsecces(true);
                setShowForgotPwdEmail(false);
                console.log('Reset password email sent successfully');
            }
        }).catch((error) => {
            if (typeof document !== 'undefined') {
                console.error('Error while creating request to reset user password', error);
            }
        })
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
                    <Form.Group controlId='loginPwd' className='mb-0'>
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control type="password" value={pwd}
                            onChange={e => {setPwd(e.target.value)}}  onKeyPress={ifEnterPressed}/>
                        <Button variant='link' onClick={() => {setShowForgotPwdEmail(true)}}>שכחתי סיסמה</Button>
                    </Form.Group>
                        {showForgotPwdEmail && <Card.Body>
                            <Form.Group controlId='forgotPwdEmail'>
                                <Form.Label>דואר אלקטרוני לאיפוס סיסמה</Form.Label>
                                <Form.Control type="email" value={forgotPwdEmail} className={showForgotPwdEmailError ? 'is-invalid' : null}
                                    onChange={e => { setForgotPwdEmail(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
                                <Button variant='dark' className='mt-2' onClick={handleForgotPassword}>אפס סיסמה</Button>
                            </Form.Group>
                        </Card.Body>}
                        {showResetsecces && <Form.Label>נשלח מייל לאיפוס סיסמה</Form.Label>}
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
