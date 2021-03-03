import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './GalleriesPage.css';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import MainCardEditorModal from '../../components/MainCardEditorModal/MainCardEditorModal';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import AddMainCard from '../../components/AddMainCard/AddMainCard';
import ActiveGardenContext from '../../utils/ActiveGardenContext';
import updateGalleryDetails from '../../utils/updateGalleryDetails';
import GalleryModel from '../../model/GalleryModel';

const GalleriesPage = ({data, onUpdate}) => {
    const activeUser = useContext(ActiveUserContext);
    const activeGarden = useContext(ActiveGardenContext);
    const [showMainCardEditorModal, setShowMainCardEditorModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [galleryToEdit, setGalleryToEdit] = useState('');

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    if (!activeGarden) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }

    function handleEdit(gallery) {
        setGalleryToEdit(gallery);
        setShowMainCardEditorModal(true);
    }    

    function handleDeleteClick(gallery) {
        setGalleryToEdit(gallery);
        setShowDeleteAlert(true);
    }

    async function handlePublish(gallery){
        const {id, title, isReady} = gallery;
        const res = await updateGalleryDetails(id, title, !isReady);
        const galleryToSend = new GalleryModel(res);
        galleryToSend.images = gallery.images;
        handleUpdate('update', galleryToSend);
    }

    function handleUpdate(action, content){
        const galleries = {...data.galleries};
        if (!(action === 'delete')) {
            galleries[content.id] = content;
        } else {
            delete galleries[content.id];
        }
        onUpdate('galleries', galleries);
    }

    const addGallery = activeUser && activeUser.role === 'manager' ?
        <Col className='py-2' md={6} lg={3}>
            <AddMainCard onClick={() => { setShowMainCardEditorModal(true) }}/>
        </Col>
    : null;
    
    const galleriesView = data && data.galleries ? Object.values(data.galleries).map(gallery => {
        const id = gallery.id;

        return(<Col className='py-2' md={6} lg={3} key={id}>
            <GalleryCard gallery={gallery} handleEdit={handleEdit} handleDeleteClick={handleDeleteClick} 
                handlePublish={handlePublish} activeUser={activeUser}/>
        </Col>)        
    }) : null;

    return (
        <div className="p-galleries">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        <div className='name'>{activeGarden.name}</div>
                        <h2>הגלריות שלנו</h2>
                    </Col>
                    <Col sm={3} className='p-0'>
                        <div className='logo'><img src={activeGarden.logo} alt="logo"/></div>
                    </Col>
                </Row>
                <Row>
                    {addGallery}
                    {galleriesView}
                </Row>
            </Container>
            <MainCardEditorModal data={galleryToEdit} cardType='gallery' showModal={showMainCardEditorModal} handleUpdate={handleUpdate} 
                closeModal={() => { setShowMainCardEditorModal(false) }} cleanDataToEdit={() => { setGalleryToEdit('') }} />
            <DeleteWarningModal data={galleryToEdit} objectType='גלריה' showModal={showDeleteAlert} handleUpdate={handleUpdate}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setGalleryToEdit('') }} />
        </div>
    )
}

export default GalleriesPage;