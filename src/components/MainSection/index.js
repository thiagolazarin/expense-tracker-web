import {useEffect, useState} from "react";
import './style.css';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import LuxonUtils from '@date-io/luxon';
import Button from '@material-ui/core/Button';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// Components
import SearchBar from './components/SearchBar';
import AccountOverview from './components/AccountOverview';
import ListItem from './components/ListItem';

// Date helper
import { DateTime } from "luxon";

// API Requests
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const MainSection = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [ transactions, setTransactions ] = useState([]);
    const [ selectedDate, setSelectedDate ] = useState(DateTime.now());
    const [type, setType] = useState(1);
    const [ category, setCategory ]= useState(1);
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const toggleModal = () => {
        setOpen(!open);
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const baseUrl = "http://localhost:4000/api/v1";

    const fetchTransactions = async () => {
        try{
            const response = await axios.get(baseUrl + "/transaction");
            setTransactions(response.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const registerTransaction = async () => {
        try{
            await axios.post(baseUrl + "/transaction", {
                tipo: type,
                valor: value,
                categoriaId: category,
                descricao: description,
                data: selectedDate
            });

            setOpen(false);
            await fetchTransactions();
        }
        catch (e) {
            console.log(e);
        }
    }

    // Vai chamar a nossa funcao fetchTransactions() quando o componente MainSection for renderizado.
    useEffect(() => {
        fetchTransactions();
    }, [])

    return (

        <div className="mainSection-container">
            <div className="mainSection-header">
                <h1>Daily Transactions</h1>

                <div className="mainSection-header-col-2">
                    <DateRangeIcon/>
                    <Fab color="primary" aria-label="add" size="small">
                        <AddIcon onClick={toggleModal}/>
                    </Fab>

                </div>

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
                            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) => setDescription(e.target.value)}/>
                            <TextField id="outlined-basic" label="Values" variant="outlined" onChange={(e) => setValue(e.target.value)}/>

                            <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                            <Select
                                native
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value={1}>Expense</option>
                                <option value={2}>Income</option>
                            </Select>

                            <InputLabel htmlFor="age-native-simple">Categories</InputLabel>
                            <Select
                                native
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >

                                {props.categories.map((c) => (
                                    <option value={c.cat_id} key={c.cat_id}>{c.cat_nome}</option>
                                ))}

                            </Select>

                            <MuiPickersUtilsProvider utils={LuxonUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={registerTransaction}>
                                Register transaction
                            </Button>
                        </div>
                    </Fade>
                </Modal>

            </div>

            <SearchBar/>

            <AccountOverview/>

            {transactions.map((t) => (
                <ListItem descricao={t.descricao} data={DateTime.fromISO(t.tran_data).setLocale('pt-BR').toLocaleString()}
                          valor={t.tran_valor} tipo_transacao={t.tipo_transasao_id}/>
            ))}
        </div>

    )

}

export default MainSection;