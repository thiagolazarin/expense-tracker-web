import './style.css'

// Material UI
import AddIcon from '@material-ui/icons/Add';

const AccountAddButton = (props) => {
    return(
        <div className="account-add-button-container">
            <AddIcon className="account-add-button-icon" />
            <button>Add another</button>
        </div>
    )
}

export default AccountAddButton;