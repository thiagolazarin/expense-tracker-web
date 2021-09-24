import {useState} from "react";

import './style.css'
// Components
import Container from './components/Container';
import AccountItem from "./components/AccountItem";
import CategoryItem from "./components/CategoryItem";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/core/styles";

import axios from "axios";

import categoryIcons from '../../assets/categoryIcons.json'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: "30%",
        height: "300px",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: "30px",
    },
}));

const SideSection = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [ name, setName ] = useState('');
    const [ iconId, setIconId ] = useState('');

    const toggleModal = () => {
        setOpen(!open);
    }

    const baseUrl = "http://localhost:4000/api/v1";

    const registerCategory = async () => {
        try{
            await axios.post(baseUrl + "/category", {
                nome: name,
                icon_id: iconId
            });

            setOpen(false);
            props.updateCategories();
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="sidesection-container">
            <Container title="accounts" children={<AccountItem account="Nubank"/>}/>

            <Container title="categories" clickAction={toggleModal} children={props.categories.length === 0 ? (
                <p className="sidesection-categories-none">No category available</p>)
                :
                props.categories.map((c) => (
                    <CategoryItem name={c.cat_nome} iconId={c.cat_icon_id} key={c.cat_id}/>
            ))}/>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={toggleModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3 className="modal-title">Register Category </h3>
                        <div className="chooseCategoryIcon-container">
                            {categoryIcons.icons.map((category) => (
                                <img className={iconId === category.id ? "icon-selected" : ""} key={category.id} src={category.src} alt="avatar icons" onClick={() => setIconId(category.id.toString())} />
                            ))}
                        </div>
                        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
                        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={registerCategory}>
                            Register
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default SideSection;