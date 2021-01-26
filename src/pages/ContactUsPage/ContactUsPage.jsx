import { useContext, useEffect, useState } from 'react';
import { Button, CardColumns, Card, Form, Spinner } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import addImage from '../../utils/addImage';
import emailjs from 'emailjs-com';
import isEmailValid from '../../utils/isEmailValid';
import './ContactUsPage.css'


const ContactUsPage = () => {
    const activeUser = useContext(ActiveUserContext);
    const [name, setName] = useState(activeUser ? `${activeUser.fname} ${activeUser.lname}` : '');
    const [email, setEmail] = useState(activeUser ? activeUser.email : '');
    const [subject, setSubject] = useState('');
    const [request, setRequest] = useState('');
    const [useUserInfo, setUseUserInfo] = useState(activeUser ? true : false);
    const [files, setFiles] = useState('');
    const [filesUrl, setFilesUrl] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    function sendForm () {                                      // sending the form to site's DevTeam and cleaning the fields
        emailjs.send("service_5cx738e","template_k3nemuh",{
            from_name: name,
            from_email: email,
            topic: subject,
            message: request,
            file_links: filesUrl,
            });

        setSubject('');
        setRequest('');
        setFiles('');
        setFilesUrl('');
        setIsFormSubmitted(true);
    }
    
    useEffect(() => {
        if (name && isEmailValid(email) && subject && request) {        // setting the form as valid - if all required fields filled & email is valid
            setIsFormValid(true);
            setShowEmailError(false);
        } else if (!isEmailValid(email) && email!=='') {                // showing error if the email is not valid
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
    
    function onSwitchMode() {                                           // giving the users option to automatically fill their details
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
    
    async function onFilesSelect(event) {                               // uploading images to show the problem if needed
        setFiles(event.target.files);
        const filesArr = Object.values(event.target.files);
        let newFilesUrl = [];
        await Promise.all(filesArr.map(async file => {
            const res = await addImage(file, 'fe0qzAHNtH');
            newFilesUrl.push(res.get('file')._url);
            debugger
        }));
        setFilesUrl(newFilesUrl);
    }

    const filesAmount = files ? files.length : 0;

    const filesView = filesUrl ? filesUrl.map((fileUrl, index) =>
        <Card key={index}>
            <Card.Img src={fileUrl}/>
        </Card>
    ) : null;

    if (isFormSubmitted) {                                              // showing success message after sending the form
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
                    <Form.File id="formContactUsFile" label='' data-browse="בחירת קבצים" accept="image/*" custom multiple onChange={onFilesSelect}/>
                    <Form.Text className="text-muted">{filesAmount >0 ? `נבחרו ${filesAmount} קבצים` : 'ניתן לבחור מספר קבצים'}</Form.Text>
                    <CardColumns>
                        {filesView}
                    </CardColumns>
                    {files && filesView === null && 
                        <div className='images-spinner row justify-content-center mt-3'>
                            <Spinner animation="border" variant="warning" />
                        </div>
                    }
                </Form.Group>
                <Button variant="warning" type="button" className='w-100' disabled={!isFormValid} onClick={sendForm}>
                    שליחה
                </Button>
            </Form>
        </div>
    )
}

export default ContactUsPage;