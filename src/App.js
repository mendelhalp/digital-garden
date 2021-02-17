import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MyGardenPage from './pages/MyGardenPage/MyGardenPage';
import DapeyKesherPage from './pages/DapeyKesherPage/DapeyKesherPage';
import GalleriesPage from './pages/GalleriesPage/GalleriesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import { useEffect, useState } from 'react';
import ActiveUserContext from './utils/ActiveUserContext';
import ActiveGardenContext from './utils/ActiveGardenContext';
import Parse from 'parse';
import UserModel from './model/UserModel';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import DafKesherPage from './pages/DafKesherPage/DafKesherPage';
import TopNavbar from './components/TopNavbar/TopNavbar';
import{ init } from 'emailjs-com';
import getGardenDetails from './utils/getGardenDetails';
import getGardenData from './utils/getGardenData';
import getGalleriesImages from './utils/getGalleriesImages';

function App() {
  const [activeUser, setActiveUser] = useState(Parse.User.current() ? new UserModel(Parse.User.current()) : null);
  const [activeGarden, setActiveGarden] = useState(null);
  const [gardenData, setGardenData] = useState(null);

  useEffect(() => {
    async function getGarden(){
      const garden = await getGardenDetails(activeUser);
      const data = await getGardenData(garden.parseGarden);
      setActiveGarden(garden);
      setGardenData(data);
      
      const images = await getGalleriesImages(data.galleries);
      const newGalleries = {...data.galleries};
      Object.keys(images).forEach(gallery => {
        newGalleries[gallery].images = images[gallery].images;
      });
      const newData = {...data};
      newData.galleries = newGalleries;
      setGardenData(newData);
    }
    activeUser && getGarden();
  },[activeUser]);
  
  init("user_AV4NvFTR6vJnUEHOtXINx");
  const handleLogin = (loggedinUser) => {
    setActiveUser(loggedinUser);
  }

  const handleLogout = () => {
    setActiveUser(null);
    Parse.User.logOut();
  }

  const updateGardenData = (type, content) => {
    const data = {...gardenData};
    data[type] = content;
    setGardenData(data);
  }

  return (
    <>
      <HashRouter>
        <Switch>
          <ActiveUserContext.Provider value={activeUser}>
            <ActiveGardenContext.Provider value={activeGarden}>
              <TopNavbar onLogout={handleLogout}/>
              <Route exact path="/"><HomePage onLogin={handleLogin} /></Route>
              <Route exact path="/my-garden"><MyGardenPage data={gardenData}/></Route>
              <Route exact path="/dapey-kesher"><DapeyKesherPage data={gardenData} onUpdate={updateGardenData}/></Route>
              <Route exact path="/dapey-kesher/:id"><DafKesherPage data={gardenData} onUpdate={updateGardenData}/></Route>
              <Route exact path="/galleries"><GalleriesPage data={gardenData} onUpdate={updateGardenData}/></Route>
              <Route exact path="/galleries/:id"><GalleryPage data={gardenData} onUpdate={updateGardenData}/></Route>
              <Route exact path="/contact-us"><ContactUsPage /></Route>
            </ActiveGardenContext.Provider>
          </ActiveUserContext.Provider>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
