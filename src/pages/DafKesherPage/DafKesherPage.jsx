import './DafKesherPage.css'
import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StudyTopicBox from '../../components/StudyTopicBox/StudyTopicBox';
import ActiveUserContext from '../../utils/ActiveUserContext';

function DafKesherPage() {
    const activeUser = useContext(ActiveUserContext);
    const dafKesherId = useParams().id;

    const topicsView = <StudyTopicBox topic={{headline:"תורה", content:"השבוע למדנו על יעקב אבינו"}} showEdit={activeUser ? true : false}/>;

    const messagesView = 'messages';

    return (
        <div className='p-daf-kesher'>
            <Container>
                <h2>{`דף קשר ${dafKesherId}`}</h2>
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