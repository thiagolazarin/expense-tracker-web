import './style.css'

// Material UI
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import NubankLogo from '../../../../assets/images/nubank-icon.png';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(2),
        height: theme.spacing(2),
    },
}));

const AccountItem = (props) => {
    const classes = useStyles();

    return(
        <div className="account-item-container">
            <Avatar className={classes.small} alt="Nubank logo" src={NubankLogo}/>
            <p className="account-item-text">{props.account}</p>
        </div>
    )
}

export default AccountItem;