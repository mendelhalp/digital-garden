import './HomePage.css'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import logo from '../../images/logo192.png'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';

const HomePage = () => {
    const [loginModalShow, setLoginModalShow] = useState(false);

    const handleCloseLogin = () => {
        setLoginModalShow(false);
    }

    return (
        <div className="p-home">
            <TopNavbar activeLink='Home'/>
            <div className='main-content'>
                <div className='logo'>
                    <img className='logo-img' src={logo} alt="logo"/>
                </div>
                <div className='main-text'>
                    <div className='text'>
                        <h2>הגן הדיגיטלי</h2>
                        <h3>הקשר עם ההורים</h3>
                        <h3>נראה אחרת!</h3>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <Button variant="warning" size='lg' onClick={() => { setLoginModalShow(true) }}>כניסה</Button>{' '}
                <Button variant="outline-warning" size='lg'>הרשמה</Button>
            </div>
            <LoginModal show={loginModalShow} handleCloseLogin={handleCloseLogin}/>

        </div>
    )
}

export default HomePage;