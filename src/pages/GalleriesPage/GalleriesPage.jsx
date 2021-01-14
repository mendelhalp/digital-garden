import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import Parse from 'parse';
import './GalleriesPage.css'
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { Col, Container, Row } from 'react-bootstrap';

const GalleriesPage = (props) => {
    const {onLogout} = props;
    const [galleries, setGalleries] = useState([]);
    const activeUser = useContext(ActiveUserContext);

    useEffect(() => {
        async function getGalleries () {
            const parseUser = await new Parse.Query(new Parse.User()).get(activeUser.id);
            const parseGan = await new Parse.Query(new Parse.Object.extend('Gan')).get(parseUser.get('gan').id);

            const Gallery = Parse.Object.extend('Gallery');
            const query = new Parse.Query(Gallery);
            query.equalTo("gan", parseGan);
            const results = await query.find();
            setGalleries(results.map(gallery => {
                return(
                    {
                        'id':gallery.id,
                        'title':gallery.get('title'),
                        'img':''
                    }
                )
            }));
        }

        getGalleries();
    },[]);

    console.log(galleries);
    const galleriesView = galleries ? galleries.map( gallery =>
        <Col className='py-2' md={6} lg={3}>
            <GalleryCard gallery={gallery}/>
        </Col>
    ) : null;


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-galleries">
            <TopNavbar onLogout={onLogout}/>
            <Container>
                <Row>
                    {galleriesView}
                </Row>
            </Container>
        </div>
    )
}

export default GalleriesPage;