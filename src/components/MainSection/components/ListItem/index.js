import './style.css';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import EjectIcon from '@material-ui/icons/Eject';
import { green, red } from '@material-ui/core/colors';

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
                    <EjectIcon style={props.tipo_transacao === 1 ? {color: red[500]} : {color: green[500]}}/>
                </div>

                <div className="listItem-texts">
                    <h4>{props.descricao}</h4>
                    <p>{props.data}</p>
                </div>
            </div>
            
            <div className="listItem-total">
                <p>${props.valor}</p>
            </div>
        </div>

    )

}

export default ListItem;