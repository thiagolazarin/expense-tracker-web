import './style.css'


const Container = (props) => {
    return(
        <div className="container-main">
            <h3>{props.title ? props.title.toUpperCase() : props.title}</h3>

            {props.children}

            {props.footer}
        </div>
    )
}

export default Container;