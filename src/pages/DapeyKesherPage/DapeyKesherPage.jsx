import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css';
import getGardenDapeyKesher from '../../utils/getGardenDapeyKesher';
import getGardenDetails from '../../utils/getGardenDetails';
import AddMainCard from '../../components/AddMainCard/AddMainCard';
import MainCardEditorModal from '../../components/MainCardEditorModal/MainCardEditorModal';
import DeleteWarningModal from '../../components/DeleteWarningModal/DeleteWarningModal';

const DapeyKesherPage = () => {
    const [dapeyKesher, setDapeyKesher] = useState([]);
    const activeUser = useContext(ActiveUserContext);
    const [garden, setGarden] = useState('');
    const [showMainCardEditorModal, setShowMainCardEditorModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [dafKesherToEdit, setDafKesherToEdit] = useState('');
    
    useEffect(() => {
        async function getDapeyKesher() {
            const garden = await getGardenDetails(activeUser);
            setGarden(garden);
            const dapeyKesher = await getGardenDapeyKesher(garden.id);
            setDapeyKesher(dapeyKesher);
        }
        
        getDapeyKesher();
    }, [showMainCardEditorModal,showDeleteAlert])

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

    const dapeyKesherView = dapeyKesher ? dapeyKesher.map(dafKesher =>
        <Col className='py-2' md={6} lg={3} key={dafKesher.id}>
            <DafKesherCard dafKesher={dafKesher} handleEdit={handleEdit} handleDeleteClick={handleDeleteClick} activeUser={activeUser}/>
        </Col>
    ) : null;


    return (
        <div className="p-dapey-kesher">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        <div className='name'>{garden.name}</div>
                        <h2>דפי הקשר שלנו</h2>
                    </Col>
                    <Col sm={3} className='p-0'>
                        {garden ? <div className='logo'><img src={garden.logo} alt="logo"/></div> : null}
                    </Col>
                </Row>
                <Row className='align-items-stretch'>
                    {addDafKesher}
                    {dapeyKesherView}
                </Row>
            </Container>
            <MainCardEditorModal data={dafKesherToEdit} parseGarden={garden.parseGarden} cardType='dafKesher'
                showModal={showMainCardEditorModal} closeModal={() => { setShowMainCardEditorModal(false) }} cleanDataToEdit={() => { setDafKesherToEdit('') }} />
            <DeleteWarningModal data={dafKesherToEdit} objectType='דף קשר' showModal={showDeleteAlert}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setDafKesherToEdit('') }} />
        </div>
    )
}

export default DapeyKesherPage;