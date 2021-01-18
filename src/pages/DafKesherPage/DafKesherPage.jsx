import './DafKesherPage.css'
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function DafKesherPage(props) {

    const dafKesherId = useParams().id;

    const topicsView = 'topics';

    const messagesView = 'messages';

    return (
        <div className='p-daf-kesher'>
            <Container>
                <h2>{`דף קשר ${dafKesherId}`}</h2>
                <Row>
                    <Col md={8}>
                        <Card>
                            <Card.Header as='h5'>מה למדנו השבוע?</Card.Header>
                            {topicsView}
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header as='h5'>הודעות</Card.Header>
                            {messagesView}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DafKesherPage;