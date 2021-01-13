import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import './GalleriesPage.css'

const GalleriesPage = (props) => {
    const {onLogout} = props;
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-galleries">
            <TopNavbar activeLink='Galleries' onLogout={onLogout}/>
            galleries page
        </div>
    )
}

export default GalleriesPage;