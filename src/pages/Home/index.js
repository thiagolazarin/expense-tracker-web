import './style.css'

// Components
import Sidebar from '../../components/Sidebar';
import SideSection from "../../components/SideSection";
import MainSection from '../../components/MainSection';

const Home = (props) => {
    return(
        <div className="home-container">
            <Sidebar />
            <SideSection />
            <MainSection />
        </div>
    )
}

export default Home;