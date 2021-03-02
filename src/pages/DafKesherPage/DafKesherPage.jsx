import './DafKesherPage.css'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import StudyTopicBox from '../../components/StudyTopicBox/StudyTopicBox';
import ActiveUserContext from '../../utils/ActiveUserContext';
import MessageBox from '../../components/MessageBox/MessageBox';
import AddMessageBox from '../../components/MessageBox/AddMessageBox';
import AddStudyTopicBox from '../../components/StudyTopicBox/AddStudyTopicBox';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import DafKesherEditorModal from '../../components/DafKesherEditorModal/DafKesherEditorModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import ActiveGardenContext from '../../utils/ActiveGardenContext';

function DafKesherPage({data, onUpdate}) {
    const activeUser = useContext(ActiveUserContext);
    const activeGarden = useContext(ActiveGardenContext);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditorModal, setShowEditorModal] = useState(false);
    const [contentToEdit, setContentToEdit] = useState('');

    const dafKesherId = useParams().id;
    
    if (!data) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }
    
    if (!activeUser) {
        return <Redirect to="/" />
    }
    
    const { name, logo } = activeGarden;
    const dafKesherData = data.dapeyKesher[dafKesherId].data;
    const { studyTopics, messages } = dafKesherData;
    const {title, hebDate} = data.dapeyKesher[dafKesherId];
    

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

    function handleUpdate(type, content) {
        const updatedDafKesherData = {...dafKesherData};
        updatedDafKesherData[type] = content;
        const dapeyKesher = {...data.dapeyKesher};
        dapeyKesher[dafKesherId].data = updatedDafKesherData;
        onUpdate('dapeyKesher', dapeyKesher)
    }

    const topicsView = studyTopics ? Object.values(studyTopics).map( (topic, index) => 
        <div key={index}>
            <StudyTopicBox topic={{ 'headline': topic.headline, 'content': topic.content }} activeUser={activeUser}
                onEditClick={() => { handleEditClick({ type: 'studyTopics', index: index }) }}
                onDeleteClick={() => { handleDeleteClick({ type: 'studyTopics', index: index }) }} />
        </div>
    ) : null;
    
    const addTopic = activeUser && activeUser.role === 'manager' && <AddStudyTopicBox onClick={() => { handleAddClick('studyTopics') }}/>;

    const messagesView = messages ? Object.values(messages).map( (message, index) => 
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
                        <div className='name'>{name}</div>
                        <h2>{`דף קשר ${title}`}</h2>
                        <div className='date'>{hebDate}</div>
                    </Col>
                    <Col sm={3} className='p-0'>
                        <div className='logo'><img src={logo} alt="logo"/></div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className='mb-3'>
                        <Card>
                            <Card.Header as='h5'>
                                <span>מה למדנו השבוע?</span>
                                <FontAwesomeIcon className='view-icon' icon={faNewspaper}/>
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
                                <FontAwesomeIcon className='view-icon' icon={faCommentDots}/>
                            </Card.Header>
                            {messagesView}
                            {addMessage}
                        </Card>
                    </Col>
                </Row>
            </Container>
            <DafKesherEditorModal dafKesherId={dafKesherId} fullData={dafKesherData} data={contentToEdit} cardType='dafKesher' handleUpdate={handleUpdate} 
                showModal={showEditorModal} closeModal={() => setShowEditorModal(false)} cleanDataToEdit={() => { setContentToEdit('') }}/>
            <DeleteWarningModal dafKesherId={dafKesherId} fullData={dafKesherData} data={contentToEdit} objectType={contentToEdit.type === 'studyTopics' ? 'חומר לימודי' : 'הודעה'}
                showModal={showDeleteAlert} closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setContentToEdit('') }} handleUpdate={handleUpdate}/>
        </div>
    );
}

export default DafKesherPage;