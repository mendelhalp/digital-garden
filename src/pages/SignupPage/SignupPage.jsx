import { useContext, useEffect, useState } from 'react';
import { Button, CardColumns, Card, Form, Spinner } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import addImage from '../../utils/addImage';
import emailjs from 'emailjs-com';
import isEmailValid from '../../utils/isEmailValid';
import './SignupPage.css'
import { Redirect } from 'react-router-dom';


const SignupPage = () => {
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
    const [showEmailError, setShowEmailError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    useEffect(() => {
        if (isRequierdFieldFull && isEmailValid(userEmail)) {
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
    }

    function sendForm () {
        //create user in parse
        //creat garsen in parse
        setIsFormSubmitted(true);
        cleanFields();
    }
    
    if (activeUser) {
        return <Redirect to="/"/>
    }
    
    async function onFileSelect(event) {
        const logo = event.target.files[0];
        setLogo(logo);
        console.log(logo, 'fe0qzAHNtH');
        // const res = await addImage(logo, 'fe0qzAHNtH');
        
        // after signin upload the logo to be garden logo file

        // let newLogoUrl = [res.get('file')._url];
        // setFilesUrl(newLogoUrl);
    }

    const logoView = logoUrl ?
        <Card>
            <Card.Img src={logoUrl}/>
        </Card>
    : null;

    if (isFormSubmitted) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-contact-us">
            <h2>הרשמה לאתר הגן הדיגיטלי</h2>
            <Form>
                <Form.Group controlId="formUserFname">
                    <Form.Label>שם</Form.Label>
                    <Form.Control type="text" value={userFname} onChange={e => {setUserFname(e.target.value)}}/>
                </Form.Group>
                <Form.Group controlId="formUserLname">
                    <Form.Label>משפחה</Form.Label>
                    <Form.Control type="text" value={userLname} onChange={e => {setUserLname(e.target.value)}}/>
                </Form.Group>
                
                <Form.Group controlId="formUserEmail">
                    <Form.Label>דואר אלקטרוני</Form.Label>
                    <Form.Control type="email" value={userEmail} className={showEmailError ? 'is-invalid' : null} onChange={e => { setUserEmail(e.target.value) }} />
                    <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.File id="formGardenLogo" label='' data-browse="בחירת תמונה" accept="image/*" custom multiple onChange={onFileSelect}/>
                    <CardColumns>
                        {logoView}
                    </CardColumns>
                    {logo && logoView === null && 
                        <div className='images-spinner row justify-content-center mt-3'>
                            <Spinner animation="border" variant="warning" />
                        </div>
                    }
                </Form.Group>
                <Button variant="warning" type="button" className='w-100' disabled={!isFormValid} onClick={sendForm}>
                    הרשמה
                </Button>
            </Form>
        </div>
    )
}

export default SignupPage;