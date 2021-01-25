import { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../utils/ActiveUserContext'
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import getGardenDapeyKesher from '../../utils/getGardenDapeyKesher'
import getGardenDetails from '../../utils/getGardenDetails'
import getGardenGalleries from '../../utils/getGardenGalleries'
import './MyGardenPage.css'
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faImages, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const MyGardenPage = () => {
    const activeUser = useContext(ActiveUserContext);
    const [garden, setGarden] = useState('');
    const [galleries, setGalleries] = useState([]);
    const [dapeyKesher, setDapeyKesher] = useState([]);

    useEffect(() => {
        async function getGardenData() {
            const garden = await getGardenDetails(activeUser);
            const dapeyKesher = await getGardenDapeyKesher(garden.id);
            const galleries = await getGardenGalleries(garden.id);
            setDapeyKesher(dapeyKesher);
            setGalleries(galleries);
            setGarden(garden);
        }
        getGardenData();
    },[garden]);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const dapeyKesherView = dapeyKesher ? dapeyKesher.map((dafKesher, index) => {
        
        if (index < 6) {
            return (
                <Col className='py-2' md={12} lg={6} key={dafKesher.id}>
                    <DafKesherCard dafKesher={dafKesher} activeUser={activeUser}/>
                </Col>
            )}
    }) : null;

    const galleriesView = galleries ? galleries.map((gallery, index) => {
        
        if (index < 4) {
            return (
                <Col className='py-2' md={12} lg={6} key={gallery.id}>
                    <GalleryCard gallery={gallery} activeUser={activeUser}/>
                </Col>
            )}
    }) : null;

    if (!garden) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }

    return (
        <div className="p-my-gan">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        {garden ? <h2 className='name'>{garden.name}</h2> : null}
                    </Col>
                    <Col sm={3} className='p-0'>
                        {garden ? <div className='logo'><img src={garden.logo} alt="logo"/></div> : null}
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