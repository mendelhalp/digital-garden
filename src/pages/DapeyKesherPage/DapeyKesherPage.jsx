import { useContext, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css';
import AddMainCard from '../../components/AddMainCard/AddMainCard';
import MainCardEditorModal from '../../components/MainCardEditorModal/MainCardEditorModal';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';
import ActiveGardenContext from '../../utils/ActiveGardenContext';

const DapeyKesherPage = ({data}) => {
    const activeUser = useContext(ActiveUserContext);
    const activeGarden = useContext(ActiveGardenContext);
    const [showMainCardEditorModal, setShowMainCardEditorModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [dafKesherToEdit, setDafKesherToEdit] = useState('');
    

    if (!activeUser) {
        return <Redirect to="/" />
    }

    function handleEdit(dafKesher) {
        setDafKesherToEdit(dafKesher);
        setShowMainCardEditorModal(true);
    }

    function handleDeleteClick(dafKesher) {
        setDafKesherToEdit(dafKesher);
        setShowDeleteAlert(true);
    }

    const addDafKesher = activeUser && activeUser.role === 'manager' ?
        <Col className='py-2' md={6} lg={3}>
            <AddMainCard onClick={() => { setShowMainCardEditorModal(true) }}/>
        </Col>
    : null;

    const dapeyKesherView = data ? Object.values(data.dapeyKesher).map(dafKesher =>
        <Col className='py-2' md={6} lg={3} key={dafKesher.id}>
            <DafKesherCard dafKesher={dafKesher} handleEdit={handleEdit} handleDeleteClick={handleDeleteClick} activeUser={activeUser}/>
        </Col>
    ) : null;

    if (!activeGarden) {
        return <div className='images-spinner row justify-content-center mt-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
    }

    return (
        <div className="p-dapey-kesher">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        <div className='name'>{activeGarden.name}</div>
                        <h2>דפי הקשר שלנו</h2>
                    </Col>
                    <Col sm={3} className='p-0'>
                        <div className='logo'><img src={activeGarden.logo} alt="logo"/></div>
                    </Col>
                </Row>
                <Row className='align-items-stretch'>
                    {addDafKesher}
                    {dapeyKesherView}
                </Row>
            </Container>
            <MainCardEditorModal data={dafKesherToEdit} parseGarden={activeGarden.parseGarden} cardType='dafKesher'
                showModal={showMainCardEditorModal} closeModal={() => { setShowMainCardEditorModal(false) }} cleanDataToEdit={() => { setDafKesherToEdit('') }} />
            <DeleteWarningModal data={dafKesherToEdit} objectType='דף קשר' showModal={showDeleteAlert}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setDafKesherToEdit('') }} />
        </div>
    )
}

export default DapeyKesherPage;