import './DafKesherPage.css'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StudyTopicBox from '../../components/StudyTopicBox/StudyTopicBox';
import ActiveUserContext from '../../utils/ActiveUserContext';
import getDafKesherDetails from '../../utils/getDafKesherDetails';

function DafKesherPage() {
    const activeUser = useContext(ActiveUserContext);
    const [data, setData] = useState({});
    const [header, setHeader] = useState({});
    
    const dafKesherId = useParams().id;
    
    useEffect(() => {
        async function getData() {
            const dafKesher = await getDafKesherDetails(dafKesherId);
            const header = {
                'title':dafKesher.title,
                'hebDate':dafKesher.hebDate
            };
            setHeader(header);
            setData(dafKesher.data);
        }
        getData();
    },[]);


    const topicsView = data.sdutyTopics ? data.sdutyTopics.map( (topic, index) => 
        <div key={index}>
            <StudyTopicBox topic={{'headline':topic.headline, 'content':topic.content}} showEdit={activeUser ? true : false}/>
        </div>
        ) : null;

    const messagesView = data.messages ? data.messages.map( (message, index) => 
        <div key={index}>
            <StudyTopicBox topic={{'headline':message.headline, 'content':message.content}} showEdit={activeUser ? true : false}/>
        </div>
        ) : null;

    return (
        <div className='p-daf-kesher'>
            <Container>
                <h2>{`דף קשר ${header.title}`}</h2>
                <div className='date'>{header.hebDate}</div>
                <div className='logo'></div>
                <Row>
                    <Col md={8}>
                        <Card>
                            <Card.Header as='h5'>מה למדנו השבוע?</Card.Header>
                            <Card.Body>
                                {topicsView}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header as='h5'>הודעות</Card.Header>
                            <Card.Body>
                                {messagesView}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DafKesherPage;