import { useContext, useEffect, useState } from 'react';
import { Button, CardColumns, Card, Form, Spinner, Col, Modal } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import addImage from '../../utils/addImage';
import deleteImage from '../../utils/deleteImage';
import isEmailValid from '../../utils/isEmailValid';
import { Redirect } from 'react-router-dom';
import addGarden from '../../utils/addGarden';
import signup from '../../utils/signup';
import Parse from 'parse';
import UserModel from '../../model/UserModel';


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
    const [isFormValid, setIsFormValid] = useState(false);
    const [showSignupSpinner, setShowSignupSpinner] = useState(false);
    
    useEffect(() => {
        if (isRequierdFieldFull() && isEmailValid(userEmail)) {
            setIsFormValid(true);
            setShowEmailError(false);
        } else if (!isEmailValid(userEmail) && userEmail !=='') {
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
    });

    async function login () {
        try {
            const parseUser = await Parse.User.logIn(userEmail, userPwd);
            
            // Trigger onLogin event and clean the fields
            onLogin(new UserModel(parseUser));
            handleCloseSignup();
            cleanFields();
            
        } catch(error) {
            console.log('error while login')
        }
    }

    function close () {
        handleCloseSignup();
        logoId && deleteImage(logoId);
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
    }

    async function sendForm () {
        setShowSignupSpinner(true);
        //creat garden in parse
        const garden = await addGarden(gardenName, gardenYear,logo);

        //create parent in parse
        await signup(parentsEmail, 'Dd123456', 'parent', parentsFname, '', garden.id);

        //create manager in parse
        const user = await signup(userEmail, userPwd, 'manager', userFname, userFname, garden.id);

        //delete temporary logo file
        deleteImage(logoId);

        //login with the user
        login();

        // setIsFormSubmitted(true);
        cleanFields();
    }
    
    if (activeUser) {
        return <Redirect to="/"/>
    }
    
    async function onFileSelect(event) {
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
                            <Form.Label>דואר אלקטרוני</Form.Label>
                            <Form.Control type="email" value={userEmail} className={showEmailError ? 'is-invalid' : null} 
                                onChange={e => { setUserEmail(e.target.value); setParentsEmail(`horim@${e.target.value.split('@')[0]}.com`) }} />
                            <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formUserPwd">
                            <Form.Label>סיסמה</Form.Label>
                            <Form.Control type="password" value={userPwd} onChange={e => { setUserPwd(e.target.value) }} />
                            <Form.Text className="text-muted">סיסמה צריכה להיות מעל 8 תווים ולהכיל: אות גדולה, אות קטנה ומספר.</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGardenName">
                            <Form.Label>שם הגן</Form.Label>
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
                            <Form.Label>שם משתמש להורי הגן</Form.Label>
                            <Form.Control type="text" value={parentsEmail} onChange={e => {setParentsEmail(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formParentsFname">
                            <Form.Label>שם חשבון הורי הגן</Form.Label>
                            <Form.Control type="text" value={parentsFname} onChange={e => {setParentsFname(e.target.value)}}/>
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
                <Button variant="warning" className='w-50' type="button" disabled={!isFormValid} onClick={sendForm}>
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