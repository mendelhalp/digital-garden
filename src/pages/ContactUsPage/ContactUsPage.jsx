import { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import isEmailValid from '../../utils/isEmailValid';
import './ContactUsPage.css'


const ContactUsPage = () => {
    const activeUser = useContext(ActiveUserContext);
    const [name, setName] = useState(activeUser ? `${activeUser.fname} ${activeUser.lname}` : '');
    const [email, setEmail] = useState(activeUser ? activeUser.email : '');
    const [subject, setSubject] = useState('');
    const [request, setRequest] = useState('');
    const [useUserInfo, setUseUserInfo] = useState(activeUser ? true : false);
    const [files, setFiles] = useState({});
    const [showEmailError, setShowEmailError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    function sendForm () {
        //send to email via parse...

        setSubject('');
        setRequest('');
        setFiles({});
        setIsFormSubmitted(true);
    }
    
    useEffect(() => {
        if (name && isEmailValid(email) && subject && request) {
            setIsFormValid(true);
            setShowEmailError(false);
        } else if (!isEmailValid(email) && email!=='') {
            setShowEmailError(true);
            if (isFormValid) {
                setIsFormValid(false);
            }
        } else if (isEmailValid(email)) {
            setShowEmailError(false);
            if (isFormValid) {
                setIsFormValid(false);
            }
        }
    });
    
    function onSwitchMode() {
        if (!useUserInfo) {
            setName(`${activeUser.fname} ${activeUser.lname}`);
            setEmail(activeUser.email);
            setUseUserInfo(!useUserInfo);
        } else {
            setName('');
            setEmail('');
            setUseUserInfo(!useUserInfo);
        }
    }

    function onFilesSelect(event) {
        setFiles(event.target.files);
    }

    let filesNames= '';
    if (files) { 
        for (let i =0 ; i < files.length ; i++){
            if (i===0) {
                filesNames += files[i].name.split('.')[0];
            }else {
                filesNames += `, ${files[i].name.split('.')[0]}`;
            }
        }
    }

    const filesAmount = files ? files.length : 0;

    if (isFormSubmitted) {
        return(
            <div className="p-contact-us success">
                <h2>פנייתך נשלחה בהצלחה</h2>
                <Button variant='info' onClick={() => {setIsFormSubmitted(false)}} >פנייה נוספת</Button>
            </div>
        )
    }

    return (
        <div className="p-contact-us">
            <h2>צור קשר</h2>
            <Form>
                <Form.Group controlId="formContactUsName">
                    <Form.Label>שם</Form.Label>
                    {activeUser ? <Form.Check type='switch' variant='warning' id='formContactUsFileSwitch' label={useUserInfo ? 'משתמש בפרטים שלי' : 'השתמש בפרטים שלי'} checked={useUserInfo} onChange={onSwitchMode} /> : null}
                    <Form.Control type="text" value={name} onChange={e => {setName(e.target.value)}}/>
                </Form.Group>
                
                <Form.Group controlId="formContactUsEmail">
                    <Form.Label>דואר אלקטרוני</Form.Label>
                    <Form.Control type="email" value={email} className={showEmailError ? 'is-invalid' : null} onChange={e => { setEmail(e.target.value) }} />
                    <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formContactUsSubject">
                    <Form.Label>נושא</Form.Label>
                    <Form.Control type="text" value={subject}  onChange={e => {setSubject(e.target.value)}}/>
                </Form.Group>

                <Form.Group controlId="formContactUsRequest">
                    <Form.Label>תוכן הפניה</Form.Label>
                    <Form.Control as="textarea" value={request}  onChange={e => {setRequest(e.target.value)}}/>
                </Form.Group>

                <Form.Group>
                    <Form.File id="formContactUsFile" label={files ? filesNames : 'בחירת קבצים'} data-browse="בחירת קבצים" custom multiple onChange={onFilesSelect}/>
                    <Form.Text className="text-muted">{filesAmount >0 ? `נבחרו ${filesAmount} קבצים` : 'ניתן לבחור מספר קבצים יחד'}</Form.Text>
                </Form.Group>
                <Button variant="warning" type="button" className='w-100' disabled={!isFormValid} onClick={sendForm}>
                    שליחה
                </Button>
            </Form>
        </div>
    )
}

export default ContactUsPage;