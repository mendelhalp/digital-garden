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
import createNewDafKesher from '../../utils/createNewDafKesher';
import updateDafKesherContent from '../../utils/updateDafKesherContent';
import DafKesherModel from '../../model/DafKesherModel';

const DapeyKesherPage = ({data, onUpdate}) => {
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

    async function handleDuplicate(dafKesher){
        const res = await createNewDafKesher(activeGarden.parseGarden, dafKesher.title, dafKesher.date);
        await updateDafKesherContent(res.id, dafKesher.data);

        res.data = dafKesher.data;
        const newDafKesher = new DafKesherModel(res);
        handleUpdate('add', newDafKesher);
    }

    function handleUpdate(action, content){
        const dapeyKesher = {...data.dapeyKesher};
        if (!(action === 'delete')) {
            dapeyKesher[content.id] = content;
        } else {
            delete dapeyKesher[content.id];
        }
        onUpdate('dapeyKesher', dapeyKesher);
    }

    const addDafKesher = activeUser && activeUser.role === 'manager' ?
        <Col className='py-2' md={6} lg={3}>
            <AddMainCard onClick={() => { setShowMainCardEditorModal(true) }}/>
        </Col>
    : null;

    const dapeyKesherView = data ? Object.values(data.dapeyKesher).sort((a,b) => b.date - a.date).map(dafKesher =>
        <Col className='py-2' md={6} lg={3} key={dafKesher.id}>
            <DafKesherCard dafKesher={dafKesher} handleEdit={handleEdit} handleDeleteClick={handleDeleteClick} 
                activeUser={activeUser} handleDuplicate={handleDuplicate}/>
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
            <MainCardEditorModal data={dafKesherToEdit} cardType='dafKesher' showModal={showMainCardEditorModal} handleUpdate={handleUpdate} 
                closeModal={() => { setShowMainCardEditorModal(false) }} cleanDataToEdit={() => { setDafKesherToEdit('') }} />
            <DeleteWarningModal data={dafKesherToEdit} objectType='דף קשר' showModal={showDeleteAlert} handleUpdate={handleUpdate}
                closeModal={() => setShowDeleteAlert(false)} cleanDataToEdit={() => { setDafKesherToEdit('') }} />
        </div>
    )
}

export default DapeyKesherPage;