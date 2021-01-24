import './DafKesherPage.css'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import StudyTopicBox from '../../components/StudyTopicBox/StudyTopicBox';
import ActiveUserContext from '../../utils/ActiveUserContext';
import getDafKesherDetails from '../../utils/getDafKesherDetails';
import getGardenDetails from '../../utils/getGardenDetails';
import bookIcon from '../../images/book-icon.png';
import messageIcon from '../../images/message-icon.png';
import MessageBox from '../../components/MessageBox/MessageBox';
import AddMessageBox from '../../components/MessageBox/AddMessageBox';
import AddStudyTopicBox from '../../components/StudyTopicBox/AddStudyTopicBox';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import DafKesherEditorModal from '../../components/DafKesherEditorModal/DafKesherEditorModal';

function DafKesherPage() {
    const activeUser = useContext(ActiveUserContext);
    const [data, setData] = useState({});
    const [header, setHeader] = useState({});
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditorModal, setShowEditorModal] = useState(false);
    const [contentToEdit, setContentToEdit] = useState('');
    
    const dafKesherId = useParams().id;
    
    useEffect(() => {
        async function getData() {
            const dafKesher = await getDafKesherDetails(dafKesherId);
            const gardenDetails = (await getGardenDetails(activeUser));
            const header = {
                'title': dafKesher.title,
                'hebDate': dafKesher.hebDate,
                'logo': gardenDetails.logo,
                'name': gardenDetails.name
            };
            setHeader(header);
            setData(dafKesher.data);
        }
        getData();
    }, []);
    
    if (!activeUser) {
        return <Redirect to="/" />
    }
    
    function handleAddClick(contentToEdit) {
        setContentToEdit(contentToEdit);
        setShowEditorModal(true);
    }

    function handleEditClick(contentToEdit) {
        setContentToEdit(contentToEdit);
        setShowEditorModal(true);
    }

    function handleDeleteClick(contentToEdit) {
        setContentToEdit(contentToEdit);
        setShowDeleteAlert(true);
    }

    const topicsView = data.studyTopics ? data.studyTopics.map( (topic, index) => 
        <div key={index}>
            <StudyTopicBox topic={{ 'headline': topic.headline, 'content': topic.content }} activeUser={activeUser}
                onEditClick={() => { handleEditClick({ type: 'studyTopics', index: index }) }}
                onDeleteClick={() => { handleDeleteClick({ type: 'studyTopics', index: index }) }} />
        </div>
    ) : null;
    
    const addTopic = activeUser && activeUser.role === 'manager' && <AddStudyTopicBox onClick={() => { handleAddClick('studyTopics') }}/>;

    const messagesView = data.messages ? data.messages.map( (message, index) => 
        <div key={index}>
            <MessageBox topic={{ 'headline': message.headline, 'content': message.content }} activeUser={activeUser}
                onEditClick={() => { handleEditClick({ type: 'messages', index: index }) }}
                onDeleteClick={() => { handleDeleteClick({ type: 'messages', index: index }) }} />
        </div>
    ) : null;
    
    const addMessage = activeUser && activeUser.role === 'manager' && <AddMessageBox onClick={() => { handleAddClick('messages') }}/>;

    return (
        <div className='p-daf-kesher'>
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        <div className='name'>{header.name}</div>
                        <h2>{`דף קשר ${header.title}`}</h2>
                        <div className='date'>{header.hebDate}</div>
                    </Col>
                    <Col sm={3} className='p-0'>
                        {header.logo ? <div className='logo'><img src={header.logo} alt="logo"/></div> : null}
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className='mb-3'>
                        <Card>
                            <Card.Header as='h5'>
                                <span>מה למדנו השבוע?</span>
                                <img src={bookIcon} alt="book icon"/>
                            </Card.Header>
                            <Card.Body>
                                {topicsView}
                                {addTopic}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header as='h5'>
                                <div>הודעות</div>
                                <div><img src={messageIcon} alt="message icon"/></div>
                            </Card.Header>
                            {messagesView}
                            {addMessage}
                        </Card>
                    </Col>
                </Row>
            </Container>
            <DafKesherEditorModal dafKesherId={dafKesherId} fullData={data} data={contentToEdit} 
                showModal={showEditorModal} closeModal={() => setShowEditorModal(false)} cleanDataToEdit={() => { setContentToEdit('') }}/>
            <DeleteWarningModal dafKesherId={dafKesherId} fullData={data} data={contentToEdit} objectType={contentToEdit.type === 'studyTopics' ? 'חומר לימודי' : 'הודעה'}
                showModal={showDeleteAlert} closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setContentToEdit('') }} />
        </div>
    );
}

export default DafKesherPage;