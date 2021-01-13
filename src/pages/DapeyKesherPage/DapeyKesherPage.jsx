import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import './DapeyKesherPage.css'

const DapeyKesherPage = (props) => {
    const {onLogout} = props;
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-dapey-kesher">
            <TopNavbar activeLink='DapeyKesher' onLogout={onLogout}/>
            dapey kesher page
        </div>
    )
}

export default DapeyKesherPage;