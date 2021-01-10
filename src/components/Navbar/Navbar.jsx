import { Container, Nav } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () =>{

    return(
        <Container>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="#/">הגן הדיגיטלי</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/MyGarden">הגן שלי</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/DapeyKesher">דפי קשר</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/Galleries">התמונות שלנו</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/ContactUs">צור קשר</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
    )
}

export default Navbar;