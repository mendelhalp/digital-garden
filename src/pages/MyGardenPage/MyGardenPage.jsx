import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ActiveUserContext from '../../utils/ActiveUserContext'
import './MyGardenPage.css'

const MyGardenPage = (props) => {
    const {onLogout} = props;
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-my-gan">
            <TopNavbar onLogout={onLogout}/>
            my gan page
        </div>
    )
}

export default MyGardenPage;