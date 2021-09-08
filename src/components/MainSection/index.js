import './style.css';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DateRangeIcon from '@material-ui/icons/DateRange';

import SearchBar from './components/SearchBar';
import AccountOverview from './components/AccountOverview';
import ListItem from './components/ListItem';

const MainSection = (props) => {
    return(
        
        <div className="mainSection-container"> 
            <div className="mainSection-header"> 
                <h1>Daily Transactions</h1>

                <div className="mainSection-header-col-2">
                    <DateRangeIcon />
                    <Fab color="primary" aria-label="add" size="small">
                        <AddIcon />
                    </Fab>

                </div>
                
            </div>        

            <SearchBar />

            <AccountOverview />

            <ListItem />

        
        </div>



    )



}

export default MainSection;