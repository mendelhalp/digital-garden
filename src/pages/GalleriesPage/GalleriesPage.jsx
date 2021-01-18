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

    useEffect(() => {
        async function getGalleries () {
            const gardenId = (await getGardenDetails(activeUser)).id;
            const galleries = await getGardenGalleries(gardenId);
            setGalleries(galleries);
        }

        getGalleries();
    },[]);

    const galleriesView = galleries ? galleries.map( gallery =>
        <Col className='py-2' md={6} lg={3} key={gallery.parseGalery.id}>
            <GalleryCard gallery={gallery}/>
        </Col>
    ) : null;


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-galleries">
            <Container>
                <Row>
                    {galleriesView}
                </Row>
            </Container>
        </div>
    )
}

export default GalleriesPage;