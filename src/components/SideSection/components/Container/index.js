import './style.css'

import AddButton from "../AddButton"

const Container = (props) => {
    return(
        <div className="container-main">
            <h3>{props.title ? props.title.toUpperCase() : props.title}</h3>

            {props.children}

            <AddButton clickAction={props.clickAction}/>
       </div>
    )
}

export default Container;