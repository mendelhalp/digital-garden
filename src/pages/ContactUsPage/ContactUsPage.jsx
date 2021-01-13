import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import './ContactUsPage.css'

const ContactUsPage = (props) => {
    const {onLogout} = props;
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-contact-us">
            <TopNavbar activeLink='ContactUs' onLogout={onLogout}/>
            contact us page
        </div>
    )
}

export default ContactUsPage;