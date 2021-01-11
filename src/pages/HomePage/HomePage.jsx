import './HomePage.css'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import logo from '../../images/logo192.png'

const HomePage = () => {


    return (
        <div className="p-home">
            <TopNavbar activeLink='Home'/>
                <div className='main-content'>
                    <div className='logo'>
                        <img className='logo-img' src={logo} alt="logo"/>
                    </div>
                    <div className='home-divider'></div>
                    <div className='main-text'>
                        <div className='text'>
                            <h2>הגן הדיגיטלי</h2>
                            <h3>הקשר שלך עם ההורים</h3>
                            <h3>נראה אחרת!</h3>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HomePage;