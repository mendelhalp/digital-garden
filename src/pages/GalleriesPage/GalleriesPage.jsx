import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext';
import Parse from 'parse';
import './GalleriesPage.css'

const GalleriesPage = (props) => {
    const {onLogout} = props;
    const [galleries, setGalleries] = useState([]);
    const activeUser = useContext(ActiveUserContext);

    useEffect(() => {
        async function getGalleries () {
            const parseUser = await new Parse.Query(new Parse.User()).get(activeUser.id);
            const parseGan = await new Parse.Query(new Parse.Object.extend('Gan')).get(parseUser.get('gan').id);

            const Gallery = Parse.Object.extend('Gallery');
            const query = new Parse.Query(Gallery);
            query.equalTo("gan", parseGan);
            const results = await query.find();
            setGalleries(results.map(gallery => 
                    gallery.get('title')
                ));
        }

        getGalleries();
    },[]);


    const galleriesView = [];


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-galleries">
            <TopNavbar activeLink='Galleries' onLogout={onLogout}/>
            
        </div>
    )
}

export default GalleriesPage;