import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './TopNavbar.css';

const TopNavbar = ({ activeLink }) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#/">הגן הדיגיטלי</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#/MyGarden" active={activeLink === 'MyGarden' ? true : false}>הגן שלי</Nav.Link>
          <Nav.Link href="#/DapeyKesher" active={activeLink === 'DapeyKesher' ? true : false}>דפי קשר</Nav.Link>
          <Nav.Link href="#/Galleries" active={activeLink === 'Galleries' ? true : false}>התמונות שלנו</Nav.Link>
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