import './style.css'

// Material UI
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => {
    return(
        <div className="account-add-button-container">
            <AddIcon className="account-add-button-icon" />
            <button onClick={props.clickAction}>Add another</button>
        </div>
    )
}

export default AddButton;