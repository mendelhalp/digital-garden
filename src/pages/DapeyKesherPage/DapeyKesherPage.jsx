import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import Parse from 'parse';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css';
import getGardenDapeyKesher from '../../utils/getGardenDapeyKesher';

const DapeyKesherPage = () => {
    const [dapeyKesher, setDapeyKesher] = useState([]);
    const activeUser = useContext(ActiveUserContext);
    
    useEffect(() => {
        async function getDapeyKesher() {
            const parseUser = await new Parse.Query(new Parse.User()).get(activeUser.id);
            const dapeyKesher = await getGardenDapeyKesher(parseUser.get('gan').id);
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
                <Row>
                    {dapeyKesherView}
                </Row>
            </Container>
        </div>
    )
}

export default DapeyKesherPage;