import './HomePage.css'
import logo from '../../images/logo192.png'
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';
import { Redirect } from 'react-router-dom';
import ActiveUserContext from '../../utils/ActiveUserContext';
import SignupModal from '../../components/SignupModal/SignupModal';

const HomePage = (props) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const activeUser = useContext(ActiveUserContext);
    const [redirectToMyGarden, setRedirectToMyGarden] = useState(activeUser ? true : false);
    const { onLogin } = props;

    function handleLogin(user) {
        onLogin(user);
        setRedirectToMyGarden(true);
    }
    
    function handleCloseLogin() {
        setShowLoginModal(false);
    }
    function handleCloseSignup() {
        setShowSignupModal(false);
    }
    
    if (redirectToMyGarden) {
        return <Redirect to="my-garden"/>;
    }
    return (
        <div className="p-home">
            <div className='main-content'>
                <div className='logo'>
                    <img className='logo-img' src={logo} alt="logo"/>
                </div>
                <div className='main-text'>
                    <div className='text'>
                        <h2>הגן הדיגיטלי</h2>
                        <h5>הקשר שלך עם ההורים</h5>
                        <h5>נראה אחרת!</h5>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <Button variant="outline-warning" size='lg' onClick={() => { setShowLoginModal(true) }}>כניסה</Button>{' '}
                <Button variant="warning" size='lg' onClick={() => { setShowSignupModal(true) }}>הרשמה</Button>
            </div>
            <LoginModal showModal={showLoginModal} showSignupModal={() => {setShowSignupModal(true)}} 
                handleCloseLogin={handleCloseLogin} onLogin={handleLogin}/>
            <SignupModal showModal={showSignupModal} handleCloseSignup={handleCloseSignup} onLogin={handleLogin} />
        </div>
    )
}

export default HomePage;