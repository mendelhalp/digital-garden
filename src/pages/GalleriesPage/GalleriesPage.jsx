import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './GalleriesPage.css';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { Col, Container, Row } from 'react-bootstrap';
import getGardenGalleries from '../../utils/getGardenGalleries';
import getGardenDetails from '../../utils/getGardenDetails';

const GalleriesPage = () => {
    const [galleries, setGalleries] = useState([]);
    const activeUser = useContext(ActiveUserContext);
    const [garden, setGarden] = useState('');

    useEffect(() => {
        async function getGalleries () {
            const garden = await getGardenDetails(activeUser);
            setGarden(garden);
            const galleries = await getGardenGalleries(garden.id);
            setGalleries(galleries);
        }

        getGalleries();
    },[]);

    const galleriesView = galleries ? galleries.map( gallery => {
        return(<Col className='py-2' md={6} lg={3} key={gallery.id}>
            <GalleryCard gallery={gallery}/>
        </Col>)
    }) : null;


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-galleries">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        {garden ? <div className='name'>{garden.name}</div> : null}
                        <h2>הגלריות שלנו</h2>
                    </Col>
                    <Col sm={3} className='p-0'>
                        {garden ? <div className='logo'><img src={garden.logo} alt="logo"/></div> : null}
                    </Col>
                </Row>
                <Row>
                    {galleriesView}
                </Row>
            </Container>
        </div>
    )
}

export default GalleriesPage;