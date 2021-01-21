import './DafKesherPage.css'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StudyTopicBox from '../../components/StudyTopicBox/StudyTopicBox';
import ActiveUserContext from '../../utils/ActiveUserContext';
import getDafKesherDetails from '../../utils/getDafKesherDetails';
import getGardenDetails from '../../utils/getGardenDetails';
import MessageBox from '../../components/MessageBox/MessageBox';
import bookIcon from '../../images/book-icon.png';
import messageIcon from '../../images/message-icon.png';

function DafKesherPage() {
    const activeUser = useContext(ActiveUserContext);
    const [data, setData] = useState({});
    const [header, setHeader] = useState({});
    
    const dafKesherId = useParams().id;
    
    useEffect(() => {
        async function getData() {
            const dafKesher = await getDafKesherDetails(dafKesherId);
            const gardenDetails = (await getGardenDetails(activeUser));
            const header = {
                'title':dafKesher.title,
                'hebDate':dafKesher.hebDate,
                'logo':gardenDetails.logo,
                'name':gardenDetails.name
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
            <MessageBox topic={{'headline':message.headline, 'content':message.content}}/>
        </div>
        ) : null;

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
                        <div className='logo'><img src={header.logo} alt="logo"/></div>
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
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DafKesherPage;