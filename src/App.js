import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MyGanPage from './pages/MyGanPage/MyGanPage';
import DapeyKesherPage from './pages/DapeyKesherPage/DapeyKesherPage';
import GalleriesPage from './pages/GalleriesPage/GalleriesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';

function App() {
  return (
    <>
      <HashRouter>
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
