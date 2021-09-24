import {useEffect, useState} from "react";
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
    const [ categories, setCategories ]= useState([]);

    const baseUrl = "http://localhost:4000/api/v1";

    const fetchCategories = async () => {
        try{
            const response = await axios.get(baseUrl + "/category");
            setCategories(response.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return(
        <div className="home-container">
            <Sidebar />
            <SideSection categories={categories} updateCategories={fetchCategories}/>
            <MainSection categories={categories} />

        </div>
    )
}

export default Home;