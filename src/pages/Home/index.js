import { useEffect, useState } from "react";
import './style.css'

// API Requests
import axios from "axios";

// Components
import Sidebar from '../../components/Sidebar';
import SideSection from "../../components/SideSection";
import MainSection from '../../components/MainSection';

// State = Estado de um componente.
// Axios = Requisicao HTTP.
// Hooks = ....
// Lifecycle = Ciclos de vida do componente que podemos controlar.

const Home = (props) => {
    const [ transactions, setTransactions ] = useState([]);

    const baseUrl = "http://localhost:4000/api/v1";

    const fetchTransactions = async () => {
        try{
            const response = await axios.get(baseUrl + "/transaction");
            setTransactions(response.data)
        }
        catch (e) {
            console.log(e);
        }
    }

    // Vai chamar a nossa funcao fetchTransactions() quando o componente Home for renderizado.
    useEffect(() => {
        fetchTransactions();

    }, [])

    return(
        <div className="home-container">
            <Sidebar />
            <SideSection />
            <MainSection trans={transactions}/>

        </div>
    )
}

export default Home;