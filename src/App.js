import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MyGardenPage from './pages/MyGardenPage/MyGardenPage';
import DapeyKesherPage from './pages/DapeyKesherPage/DapeyKesherPage';
import GalleriesPage from './pages/GalleriesPage/GalleriesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import { useState } from 'react';

function App() {
  const [activeUser, setActiveUser] = useState(null);


  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/MyGarden"><MyGardenPage /></Route>
          <Route exact path="/DapeyKesher"><DapeyKesherPage /></Route>
          <Route exact path="/Galleries"><GalleriesPage /></Route>
          <Route exact path="/ContactUs"><ContactUsPage /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
