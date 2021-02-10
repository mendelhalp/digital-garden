import { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../utils/ActiveUserContext'
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import './MyGardenPage.css'
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faImages, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import ActiveGardenContext from '../../utils/ActiveGardenContext';

const MyGardenPage = ({data}) => {
    const activeUser = useContext(ActiveUserContext);
    const activeGarden = useContext(ActiveGardenContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const dapeyKesherView = data ? data.dapeyKesher.map((dafKesher, index) => {
        
        if (index < 6) {
            return (
                <Col className='py-2' md={12} lg={6} key={dafKesher.id}>
                    <DafKesherCard dafKesher={dafKesher} activeUser={activeUser}/>
                </Col>
            )}
    }) : null;

    const galleriesView = data ? data.galleries.map((gallery, index) => {
        
        if (index < 4) {
            return (
                <Col className='py-2' md={12} lg={6} key={gallery.id}>
                    <GalleryCard gallery={gallery} activeUser={activeUser}/>
                </Col>
            )}
    }) : null;

    if (!activeGarden) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }

    return (
        <div className="p-my-gan">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        <h2 className='name'>{activeGarden.name}</h2>
                    </Col>
                    <Col sm={3} className='p-0'>
                        <div className='logo'><img src={activeGarden.logo} alt="logo"/></div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-3'>
                        <Card>
                            <Card.Header as='h5'>
                                <span>דפי קשר</span>
                                <FontAwesomeIcon icon={faNewspaper}/>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    {dapeyKesherView}
                                </Row>
                            </Card.Body>
                            <a href='#/dapey-kesher'>
                                <Card.Footer className='text-center'>
                                    <FontAwesomeIcon icon={faChevronLeft}/>
                                </Card.Footer>
                            </a>
                        </Card>
                    </Col>
                    <Col md={6} className='mb-3'>
                        <Card>
                            <Card.Header as='h5'>
                                <span>גלריות</span>
                                <FontAwesomeIcon icon={faImages}/>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    {galleriesView}
                                </Row>
                            </Card.Body>
                            <a href='#/galleries'>
                                <Card.Footer className='text-center'>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                                </Card.Footer>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyGardenPage;