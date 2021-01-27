import { useContext, useEffect, useState } from 'react';
import { Button, Card, Form, Spinner, Col, Modal, Alert, Row } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import addImage from '../../utils/addImage';
import deleteImage from '../../utils/deleteImage';
import isEmailValid from '../../utils/isEmailValid';
import { Redirect } from 'react-router-dom';
import addGarden from '../../utils/addGarden';
import signup from '../../utils/signup';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import isPasswordValid from '../../utils/isPasswordValid';


const SignupModal = ({showModal, onLogin, handleCloseSignup}) => {
    const activeUser = useContext(ActiveUserContext);
    const [userFname, setUserFname] = useState('');
    const [userLname, setUserLname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [gardenName, setGardenName] = useState('');
    const [gardenYear, setGardenYear] = useState('');
    const [parentsEmail, setParentsEmail] = useState('');
    const [parentsFname, setParentsFname] = useState('');
    const [logo, setLogo] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [logoId, setLogoId] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPwdError, setShowPwdError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [showSignupSpinner, setShowSignupSpinner] = useState(false);
    const [showParentsLoginAlert, setShowParentsLoginAlert] = useState(false);
    
    useEffect(() => {
        if (isRequierdFieldFull() && isEmailValid(userEmail) && isPasswordValid(userPwd)) {     // setting the form as valid - if all required fields filled &
            setIsFormValid(true);                                                               //      email and pwd are valid
            setShowEmailError(false);
            setShowPwdError(false)
        } else {
            
            if (!isEmailValid(userEmail) && userEmail !=='') {                  // showing error if the email is not valid
                setShowEmailError(true);
                if (isFormValid) {
                    setIsFormValid(false);
                }
            } else if (isEmailValid(userEmail)) {
                setShowEmailError(false);
                if (isFormValid) {
                    setIsFormValid(false);
                }
            }
            
            if (!isPasswordValid(userPwd) && userPwd !=='') {                   // showing error if the pwd is not valid
                setShowPwdError(true);
                if (isFormValid) {
                    setIsFormValid(false);
                }
            } else if (isPasswordValid(userPwd)) {
                setShowPwdError(false);
                if (isFormValid) {
                    setIsFormValid(false);
                }
            }
        }
    });

    async function login () {
        try {
            const parseUser = await Parse.User.logIn(userEmail, userPwd);   // performing login to the app
            
            onLogin(new UserModel(parseUser));                              // Trigger onLogin event on HomePage and cleaning the fields
            close();
            
        } catch(error) {
            console.log('error while login')
        }
    }

    function close () {
        handleCloseSignup();
        logoId && deleteImage(logoId);                                      // deleting the temporary logo file after leaving the signup
        cleanFields();
    }
    
    function isRequierdFieldFull() {
        if (userFname && userLname && userEmail && userPwd 
            && gardenName && gardenYear && parentsEmail && parentsFname) {
            return true
        }
    }

    function cleanFields() {
        setUserFname('');
        setUserLname('');
        setUserEmail('');
        setUserPwd('');
        setGardenName('');
        setGardenYear('');
        setParentsEmail('');
        setParentsFname('');
        setLogo('');
        setLogoUrl('');
        setShowSignupSpinner(false);
        setShowParentsLoginAlert(false);
    }

    function signupClicked(){                                               // showing alert with parents login details after clicking signup
        setShowSignupSpinner(true);
        setShowParentsLoginAlert(true);
    }

    async function performSignup () {
        //creat garden in parse
        const garden = await addGarden(gardenName, gardenYear,logo);

        //create parent in parse
        await signup(parentsEmail, 'Dd123456', 'parent', parentsFname, '', garden.id);

        //create manager in parse
        await signup(userEmail, userPwd, 'manager', userFname, userLname, garden.id);

        //login with the user
        login();
    }
    
    if (activeUser) {
        return <Redirect to="/"/>
    }
    
    async function onFileSelect(event) {                                    // uploading temporary file to show preview
        logoId && deleteImage(logoId);                                      // deleting the temporary logo file
        const logo = event.target.files[0];
        setLogo(logo);
        const res = await addImage(logo, 'fe0qzAHNtH');
        setLogoUrl(res.get('file')._url);
        setLogoId(res.id);
    }

    const logoView = logoUrl ?
        <Card>
            <Card.Img src={logoUrl}/>
        </Card>
    : null;

    return (
        <Modal size='md' show={showModal} onHide={close} centered className="c-signup-modal">
            <Modal.Header>
                <Modal.Title>הרשמה לאתר הגן הדיגיטלי</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert show={showParentsLoginAlert} variant="info">
                    <Alert.Heading as='h5'>פרטי התחברות להורים</Alert.Heading>
                    <hr />
                    <Form as={Row}>
                    <Form.Group as={Col} className='mb-0'>
                        <Form.Label>שם משתמש</Form.Label>
                        <Form.Control placeholder={parentsEmail} disabled />
                    </Form.Group>
                    <Form.Group as={Col} className='mb-0'>
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control placeholder="Dd123456" disabled />
                    </Form.Group>
                    </Form>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => {setShowParentsLoginAlert(false); performSignup()}} variant="outline-info">
                            רשמתי את הפרטים
                        </Button>
                    </div>
                </Alert>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formUserFname">
                            <Form.Label>שם</Form.Label>
                            <Form.Control type="text" value={userFname} onChange={e => {setUserFname(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formUserLname">
                            <Form.Label>משפחה</Form.Label>
                            <Form.Control type="text" value={userLname} onChange={e => {setUserLname(e.target.value)}}/>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formUserEmail">
                            <Form.Label>דואר אלקטרוני</Form.Label>              {/* onChanging this input it set the value of parentsEmail */}
                            <Form.Control type="email" value={userEmail} className={showEmailError ? 'is-invalid' : null} 
                                onChange={e => { setUserEmail(e.target.value); setParentsEmail(`horim@${e.target.value.split('@')[0]}.com`) }} />
                            <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formUserPwd">
                            <Form.Label>סיסמה</Form.Label>
                            <Form.Control type="password" value={userPwd} className={showPwdError ? 'is-invalid' : null} 
                            onChange={e => { setUserPwd(e.target.value) }} />
                            <Form.Text className="text-muted">סיסמה צריכה להיות מעל 8 תווים ולהכיל: אות גדולה, אות קטנה ומספר.</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGardenName">
                            <Form.Label>שם המוסד</Form.Label>                     {/* onChanging this input it set the value of parentsFname */}
                            <Form.Control type="text" value={gardenName} 
                                onChange={e => {setGardenName(e.target.value); setParentsFname(`הורי ${e.target.value}`)}}/>
                            <Form.Text className="text-muted">לדוגמה: גן השושנים</Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGardenYear">
                            <Form.Label>שנת לימודים</Form.Label>
                            <Form.Control type="text" value={gardenYear} onChange={e => {setGardenYear(e.target.value)}}/>
                            <Form.Text className="text-muted">לדוגמה: תשפ"א</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formParentsEmail">
                            <Form.Label>שם משתמש להורים</Form.Label>
                            <Form.Control type="text" value={parentsEmail} onChange={e => {setParentsEmail(e.target.value)}}/>
                            <Form.Text className="text-muted">ניתן לשינוי</Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formParentsFname">
                            <Form.Label>שם חשבון הורים</Form.Label>
                            <Form.Control type="text" value={parentsFname} onChange={e => {setParentsFname(e.target.value)}}/>
                            <Form.Text className="text-muted">ניתן לשינוי</Form.Text>
                        </Form.Group>
                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.File id="formGardenLogo" label='' data-browse="בחירת לוגו" accept="image/*" custom multiple onChange={onFileSelect}/>
                            <Form.Text className="text-muted">{logo ? 'נבחרה תמונה' : 'מומלץ לבחור לוגו שיופיע בדפי הקשר'}</Form.Text>
                        </Form.Group>
                        {logo &&
                            <Form.Group as={Col}>
                                {logoView}
                                {logo && logoView === null && 
                                        <div className='images-spinner row justify-content-center mt-3'>
                                            <Spinner animation="border" variant="warning" />
                                        </div>
                                }
                            </Form.Group>
                        }
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className='flex-nowrap'>
                <Button variant="secondary" className='w-50' onClick={close} disabled={showSignupSpinner}>סגירה</Button>
                <Button variant="warning" className='w-50' type="button" disabled={!isFormValid} onClick={signupClicked}>
                    <span className={showSignupSpinner && 'sr-only'}>הרשמה</span>
                    {showSignupSpinner &&<Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignupModal;