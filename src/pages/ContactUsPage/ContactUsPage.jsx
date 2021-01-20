import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './ContactUsPage.css'


const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [request, setRequest] = useState('');
    const activeUser = useContext(ActiveUserContext);
    const [useUserInfo, setUseUserInfo] = useState(activeUser ? true : false);
    const [files, setFiles] = useState({});
    
    
    function onSwitchMode () {
        setName(`${activeUser.fname} ${activeUser.lname}`);
        setEmail(activeUser.mail);
        setUseUserInfo(!useUserInfo);
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
                    <Form.File id="formContactUsFile" label={files ? filesNames : 'בחירת קבצים'} data-browse="בחר" custom multiple onChange={onFilesSelect}/>
                    <Form.Text className="text-muted">{filesAmount >0 ? `נבחרו ${filesAmount} קבצים` : 'ניתן לבחור מספר קבצים יחד'}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="button" className='w-100'>
                    שליחה
                </Button>
            </Form>
        </div>
    )
}

export default ContactUsPage;