import './HomePage.css'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import logo from '../../images/logo192.png'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';

const HomePage = (props) => {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const {onLogin, onLogout} = props;

    const handleCloseLogin = () => {
        setLoginModalShow(false);
    }

    return (
        <div className="p-home">
            <TopNavbar activeLink='Home' onLogout={onLogout}/>
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
                <Button variant="outline-warning" size='lg' onClick={() => { setLoginModalShow(true) }}>כניסה</Button>{' '}
                <Button variant="warning" size='lg'>הרשמה</Button>
            </div>
            <LoginModal showModal={loginModalShow} handleCloseLogin={handleCloseLogin} onLogin={onLogin}/>

        </div>
    )
}

export default HomePage;