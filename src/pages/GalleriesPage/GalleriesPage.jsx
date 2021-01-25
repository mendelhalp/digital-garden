import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './GalleriesPage.css';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import getGardenGalleries from '../../utils/getGardenGalleries';
import getGardenDetails from '../../utils/getGardenDetails';
import MainCardEditorModal from '../../components/MainCardEditorModal/MainCardEditorModal';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import AddMainCard from '../../components/AddMainCard/AddMainCard';

const GalleriesPage = () => {
    const [galleries, setGalleries] = useState([]);
    const activeUser = useContext(ActiveUserContext);
    const [garden, setGarden] = useState('');
    const [showMainCardEditorModal, setShowMainCardEditorModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [galleryToEdit, setGalleryToEdit] = useState('');

    useEffect(() => {
        async function getGalleries () {
            const garden = await getGardenDetails(activeUser);
            const galleries = await getGardenGalleries(garden.id);
            setGalleries(galleries);
            setGarden(garden);
        }

        getGalleries();
    },[showMainCardEditorModal,showDeleteAlert]);

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    function handleEdit(gallery) {
        setGalleryToEdit(gallery);
        setShowMainCardEditorModal(true);
    }    

    function handleDeleteClick(gallery) {
        setGalleryToEdit(gallery);
        setShowDeleteAlert(true);
    }    

    const addGallery = activeUser && activeUser.role === 'manager' ?
        <Col className='py-2' md={6} lg={3}>
            <AddMainCard onClick={() => { setShowMainCardEditorModal(true) }}/>
        </Col>
    : null;
    
    const galleriesView = galleries ? galleries.map(gallery => {
        return(<Col className='py-2' md={6} lg={3} key={gallery.id}>
            <GalleryCard gallery={gallery} handleEdit={handleEdit} handleDeleteClick={handleDeleteClick} activeUser={activeUser}/>
        </Col>)        
    }) : null;

    if (!garden) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
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
                    {addGallery}
                    {galleriesView}
                </Row>
            </Container>
            <MainCardEditorModal data={galleryToEdit} parseGarden={garden.parseGarden} cardType='gallery'
                showModal={showMainCardEditorModal} closeModal={() => { setShowMainCardEditorModal(false) }} cleanDataToEdit={() => { setGalleryToEdit('') }} />
            <DeleteWarningModal data={galleryToEdit} objectType='גלריה' showModal={showDeleteAlert}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setGalleryToEdit('') }} />
        </div>
    )
}

export default GalleriesPage;