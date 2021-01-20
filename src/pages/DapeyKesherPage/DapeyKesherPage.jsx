import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css';
import getGardenDapeyKesher from '../../utils/getGardenDapeyKesher';
import getGardenDetails from '../../utils/getGardenDetails';

const DapeyKesherPage = () => {
    const [dapeyKesher, setDapeyKesher] = useState([]);
    const activeUser = useContext(ActiveUserContext);
    const [garden, setGarden] = useState('');
    
    useEffect(() => {
        async function getDapeyKesher() {
            const garden = await getGardenDetails(activeUser);
            setGarden(garden);
            const dapeyKesher = await getGardenDapeyKesher(garden.id);
            setDapeyKesher(dapeyKesher);
        }
        
        getDapeyKesher();
    },[])

    const dapeyKesherView = dapeyKesher ? dapeyKesher.map(dafKesher =>
        <Col className='py-2' md={6} lg={3} key={dafKesher.id}>
            <DafKesherCard dafKesher={dafKesher}/>
        </Col>
    ) : null;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-dapey-kesher">
            <Container>
                <Row className='mx-0 header'>
                    <Col sm={9}>
                        <div className='name'>{garden.name}</div>
                        <h2>דפי הקשר שלנו</h2>
                    </Col>
                    <Col sm={3} className='p-0'>
                        <div className='logo'><img src={garden.logo} alt="logo"/></div>
                    </Col>
                </Row>
                <Row>
                    {dapeyKesherView}
                </Row>
            </Container>
        </div>
    )
}

export default DapeyKesherPage;