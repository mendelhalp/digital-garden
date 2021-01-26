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
import GalleryPage from './pages/GalleryPage/GalleryPage';
import DafKesherPage from './pages/DafKesherPage/DafKesherPage';
import TopNavbar from './components/TopNavbar/TopNavbar';
import{ init } from 'emailjs-com';

function App() {
  const [activeUser, setActiveUser] = useState(Parse.User.current() ? new UserModel(Parse.User.current()) : null);
  
  init("user_AV4NvFTR6vJnUEHOtXINx");
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
            <TopNavbar onLogout={handleLogout}/>
            <Route exact path="/"><HomePage onLogin={handleLogin} /></Route>
            <Route exact path="/my-garden"><MyGardenPage /></Route>
            <Route exact path="/dapey-kesher"><DapeyKesherPage /></Route>
            <Route exact path="/dapey-kesher/:id"><DafKesherPage /></Route>
            <Route exact path="/galleries"><GalleriesPage /></Route>
            <Route exact path="/galleries/:id"><GalleryPage /></Route>
            <Route exact path="/contact-us"><ContactUsPage /></Route>
          </ActiveUserContext.Provider>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
