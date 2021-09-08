import './style.css';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

//assets
import AmazonLogo from '../../../../assets/images/amazon-icon.png';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const ListItem = (props) => {
    const classes = useStyles();
    return(

        <div className="listItem-container">

            <div className="listItem-col-1-container">
                <div className="listItem-icon">
                    <Avatar variant="square" className={classes.root} alt="Amazon logo" src={AmazonLogo}>
                    </Avatar>
                </div>

                <div className="listItem-texts">
                    <h4>Amazon</h4>
                    <p>17 jun' 20, 07:32 PM</p>
                </div>
            </div>
            
            <div className="listItem-total">
                <p>$120.40</p>
            </div>
        </div>

    )

}

export default ListItem;