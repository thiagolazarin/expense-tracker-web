import './style.css';


// Material UI
import Avatar from '@material-ui/core/Avatar';

// Components
import Navigation from "./components/Navigation";


const Sidebar = (props) => {
    return(
        <div className="sidebar-container">
            <div className="sidebar-row-1">
                <div className="sidebar-logo">
                    <h2>Tracker</h2>
                </div>
                <Navigation />
            </div>

            <div className="sidebar-avatar-container">
                <Avatar>N</Avatar>
            </div>

        </div>
    )
}

export default Sidebar;