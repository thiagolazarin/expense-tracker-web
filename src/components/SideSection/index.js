import './style.css'

// Components
import Container from './components/Container';
import AccountItem from "./components/AccountItem";
import AccountAddButton from "../SideSection/components/AccountAddButton"
import CategoryItem from "./components/CategoryItem";

const SideSection = (props) => {
    const categorias = [{
        id: "1",
        name: "Veiculo",
        iconId: "3"
    }, {
        id: "2",
        name: "Alimentação",
        iconId: "4"
    },{
        id: "3",
        name: "Cinema",
        iconId: "5"
    },{
        id: "4",
        name: "Namoradas",
        iconId: "1"
    },
    ];

    return (
        <div className="sidesection-container">
            <Container title="accounts" children={<AccountItem account="Nubank"/>} footer={<AccountAddButton/>}/>

            <Container title="categories" children={categorias.map((c) => (
                    <CategoryItem name={c.name} iconId={c.iconId} key={c.id}/>
                ))}/>
        </div>
    )
}

export default SideSection;