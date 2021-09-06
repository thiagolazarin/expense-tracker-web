import './style.css';

import TextField from '@material-ui/core/TextField';

const SearchBar = (props) => {
    return(

        <div className="searchBar-container">
            <TextField label="Search" variant="outlined" fullWidth/>
        </div>
    )
}


export default SearchBar;