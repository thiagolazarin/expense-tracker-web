import "./style.css"

// Material UI
import { Home, AccountBalanceWallet, Description, PieChart, Redeem } from '@material-ui/icons';

const Navigation = (props) => {
    return(
        <div className="nav-container">
            <div className=" nav-icon">
                <Home />
            </div>
            <div className="nav-icon">
                <AccountBalanceWallet />
            </div>
            <div className="nav-icon">
                <Description />
            </div>
            <div className="nav-icon">
                <PieChart />
            </div>
            <div className="nav-icon">
                <Redeem />
            </div>
        </div>
    )
}

export default Navigation;