import { useContext, useEffect, useState } from 'react'
import { Card, CardColumns, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../utils/ActiveUserContext'
import bookIcon from '../../images/book-icon.png';
import getGardenDapeyKesher from '../../utils/getGardenDapeyKesher'
import getGardenDetails from '../../utils/getGardenDetails'
import getGardenGalleries from '../../utils/getGardenGalleries'
import './MyGardenPage.css'

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

    const dapeyKesherView = '';

    const galleriesView = '';

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
                    <Col sm={6}>
                        <Card>
                            <Card.Header as='h5'>
                                <span>דפי קשר</span>
                                <img src={bookIcon} alt="book icon"/>
                            </Card.Header>
                            <Card.Body>
                                <CardColumns>
                                    {dapeyKesherView}
                                </CardColumns>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Header as='h5'>
                                <span>גלריות</span>
                                <img src={bookIcon} alt="book icon"/>
                            </Card.Header>
                            <Card.Body>
                                <CardColumns>
                                    {galleriesView}
                                </CardColumns>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyGardenPage;