import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DafKesherCard from '../../components/DafKesherCard/DafKesherCard';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import Parse from 'parse';
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css';
import getHebrewDate from '../../utils/getHebrewDate';

const DapeyKesherPage = (props) => {
    const {onLogout} = props;
    const [dapeyKesher, setDapeyKesher] = useState([]);
    const activeUser = useContext(ActiveUserContext);
    
    useEffect(() => {
        async function getDapeyKesher() {
            const parseUser = await new Parse.Query(new Parse.User()).get(activeUser.id);
            const parseGan = await new Parse.Query(new Parse.Object.extend('Gan')).get(parseUser.get('gan').id);

            const query = new Parse.Query(Parse.Object.extend('DafKesher'));
            query.equalTo('gan', parseGan);
            query.descending("date");
            const results = await query.find();

            const dapeyKesher = results.map(dafKesher => {
                return({
                    'id':dafKesher.id,
                    'title':dafKesher.get('title'),
                    'hebDate':getHebrewDate(dafKesher.get('date'))
                })
            });
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