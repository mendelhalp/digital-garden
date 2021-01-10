import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import HomePage from './pages/HomePage/HomePage';
import MyGanPage from './pages/MyGanPage/MyGanPage';
import DapeyKesherPage from './pages/DapeyKesherPage/DapeyKesherPage';
import GalleriesPage from './pages/GalleriesPage/GalleriesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';

function App() {
  return (
    <>
      <HashRouter>
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

        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/MyGarden"><MyGanPage /></Route>
          <Route exact path="/DapeyKesher"><DapeyKesherPage /></Route>
          <Route exact path="/Galleries"><GalleriesPage /></Route>
          <Route exact path="/ContactUs"><ContactUsPage /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
