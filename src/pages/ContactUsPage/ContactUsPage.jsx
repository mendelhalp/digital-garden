import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import './ContactUsPage.css'

const ContactUsPage = () => {
    const activeUser = useContext(ActiveUserContext);

    return (
        <div className="p-contact-us">
            contact us page
        </div>
    )
}

export default ContactUsPage;