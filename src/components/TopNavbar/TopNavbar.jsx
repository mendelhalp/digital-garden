import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './TopNavbar.css';
import logo from '../../images/logo192.png';
import { useContext, useMemo } from 'react';
import ActiveUserContext from '../../utils/ActiveUserContext';
import { useLocation } from 'react-router-dom';
import getGreeting from '../../utils/getGreeting';

const TopNavbar = ({ onLogout }) => {

  const activeUser = useContext(ActiveUserContext);

  const path = useLocation().pathname.split('/')[1];

  const greeting = getGreeting();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#/" className='ml-2'>
        <img src={logo} alt="Digital Garden logo" className="d-inline-block align-top"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={activeUser ? "ml-auto" : "mr-auto"}>
          
          { activeUser ?
          <>
            <Nav.Link href="#/my-garden" active={path === 'my-garden' ? true : false}>הגן שלי</Nav.Link>
            <Nav.Link href="#/dapey-kesher" active={path === 'dapey-kesher' ? true : false}>דפי קשר</Nav.Link>
            <Nav.Link href="#/galleries" active={path === 'galleries' ? true : false}>גלריות</Nav.Link>
          </> : null}

          <Nav.Link href="#/contact-us" active={path === 'contact-us' ? true : false}>צור קשר</Nav.Link>
        </Nav>
        
        { activeUser ?
        <Nav>
          <Navbar.Text>{`${greeting}, ${activeUser.fname}`}</Navbar.Text>
          <Button variant='' onClick={onLogout}>התנתק</Button>
        </Nav> : null}

      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNavbar;