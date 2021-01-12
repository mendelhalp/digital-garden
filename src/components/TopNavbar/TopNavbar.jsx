import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './TopNavbar.css';
import logo from '../../images/logo192.png';

const TopNavbar = ({ activeLink }) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="#/" className='ml-2'>
        <img src={logo} alt="Digital Garden logo" className="d-inline-block align-top"/>
        {/* הגן הדיגיטלי */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#/MyGarden" active={activeLink === 'MyGarden' ? true : false}>הגן שלי</Nav.Link>
          <Nav.Link href="#/DapeyKesher" active={activeLink === 'DapeyKesher' ? true : false}>דפי קשר</Nav.Link>
          <Nav.Link href="#/Galleries" active={activeLink === 'Galleries' ? true : false}>התמונות שלנו</Nav.Link>
          <Nav.Link href="#/ContactUs" active={activeLink === 'ContactUs' ? true : false}>צור קשר</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="החשבון שלי" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">משהו</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">עוד משהו</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">משהו נוסף</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">התנתק</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNavbar;