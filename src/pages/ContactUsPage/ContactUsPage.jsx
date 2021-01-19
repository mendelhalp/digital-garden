import { useContext, useState } from 'react';
import { Button, Form, ToggleButton } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import './ContactUsPage.css'

const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [request, setRequest] = useState('');
    const activeUser = useContext(ActiveUserContext);
    const [useUserInfo, setUseUserInfo] = useState(activeUser ? true : false);
    const [files, setFiles] = useState([]);
    
    
    function onSwitchMode () {
        setName(`${activeUser.fname} ${activeUser.lname}`);
        setEmail(activeUser.mail);
        setUseUserInfo(!useUserInfo);
    }

    function onFileAdd(event) {
        console.log(event.target.files);
    }

    return (
        <div className="p-contact-us">
            <h2>צור קשר</h2>
            <Form>
                <Form.Group controlId="formContactUsName">
                    <Form.Label>שם</Form.Label>
                    {activeUser ? <Form.Check type='switch' id='formContactUsFileSwitch' label={useUserInfo ? 'משתמש בפרטים שלי' : 'השתמש בפרטים שלי'} checked={useUserInfo} onChange={onSwitchMode} /> : null}
                    {useUserInfo ? <Form.Control type="text" value={`${activeUser.fname} ${activeUser.lname}`} readOnly />
                    : <Form.Control type="text" value={name} onChange={e => {setName(e.target.value)}}/>}
                </Form.Group>
                
                <Form.Group controlId="formContactUsEmail">
                    <Form.Label>דואר אלקטרוני</Form.Label>
                    {useUserInfo ? <Form.Control type="email" value={activeUser.mail} readOnly />
                    : <Form.Control type="email" value={email}  onChange={e => {setEmail(e.target.value)}}/>}
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
                    <Form.File id="formContactUsFile" multiple onChange={onFileAdd}/>
                </Form.Group>
                <Button variant="primary" type="button" className='w-100'>
                    שליחה
                </Button>
            </Form>
        </div>
    )
}

export default ContactUsPage;