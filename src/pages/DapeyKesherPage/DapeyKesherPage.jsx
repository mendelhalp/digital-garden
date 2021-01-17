import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css'

const DapeyKesherPage = (props) => {
    const {onLogout} = props;
    const activeUser = useContext(ActiveUserContext);
    const [dapeyKesher, setDapeyKesher] = useState([{id:123, title:'פרשת שלח'},{id:124, title:'פרשת משפטים'}]);
    
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
            <TopNavbar onLogout={onLogout}/>
            <Container>
                <Row>
                    {dapeyKesherView}
                </Row>
            </Container>
        </div>
    )
}

export default DapeyKesherPage;