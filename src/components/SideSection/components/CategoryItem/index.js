import "./style.css"

// Material UI
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';

// Utils
import selectIconSrc from "../../../../utils/chooseIcon";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

const CategoryItem = (props) => {
    const classes = useStyles();

    return(
        <div className="category-item-container">
            <Avatar className={classes.small} src={selectIconSrc(props.iconId)}/>
            <p>{props.name}</p>
        </div>
    )
}

export default CategoryItem;

