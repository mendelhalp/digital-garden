import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MyGardenPage from './pages/MyGardenPage/MyGardenPage';
import DapeyKesherPage from './pages/DapeyKesherPage/DapeyKesherPage';
import GalleriesPage from './pages/GalleriesPage/GalleriesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import { useState } from 'react';
import ActiveUserContext from './utils/ActiveUserContext';
import Parse from 'parse';
import UserModel from './model/UserModel';
import GalleryPage from './pages/GalleriesPage/GalleryPage';

function App() {
  const [activeUser, setActiveUser] = useState(
    Parse.User.current() ? new UserModel(Parse.User.current()) : null);
  
  const handleLogin = (loggedinUser) => {
    setActiveUser(loggedinUser);
  }

  const handleLogout = () => {
    setActiveUser(null);
    Parse.User.logOut();
  }
  

  return (
    <>
      <HashRouter>
        <Switch>
          <ActiveUserContext.Provider value={activeUser}>
            <Route exact path="/"><HomePage onLogin={handleLogin} onLogout={handleLogout}/></Route>
            <Route exact path="/my-garden"><MyGardenPage onLogout={handleLogout} /></Route>
            <Route exact path="/dapey-kesher"><DapeyKesherPage onLogout={handleLogout} /></Route>
            <Route exact path="/galleries"><GalleriesPage onLogout={handleLogout} /></Route>
            <Route exact path="/galleries/:id"><GalleryPage onLogout={handleLogout} /></Route>
            <Route exact path="/ContactUs"><ContactUsPage onLogout={handleLogout} /></Route>
          </ActiveUserContext.Provider>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
