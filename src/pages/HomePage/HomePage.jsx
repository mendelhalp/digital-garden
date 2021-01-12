import './HomePage.css'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import logo from '../../images/logo192.png'
import { Button } from 'react-bootstrap';

const HomePage = () => {


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
                <Button variant="warning" size='lg'>כניסה</Button>{' '}
                <Button variant="outline-warning" size='lg'>הרשמה</Button>
            </div>
        </div>
    )
}

export default HomePage;