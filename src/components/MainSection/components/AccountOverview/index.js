import './style.css';

const AccountOverview = (props) => {
    return(

        <div className="AccountOverview-container">

            <div className="AccountOverview-col-1-container">
                <div className="AccountOverview-col">
                    <p>Total Expense</p>
                    <h3>$120.56</h3>
                </div>

                <div className="AccountOverview-col">
                    <p>Total Income</p>
                    <h3>$120.56</h3>
                </div>
            </div>

            <div className="AccountOverview-col AccountOverview-lastchild">
                <p>Net</p>
                <h3>$120.56</h3>
            </div>


        </div>


    )
}

export default AccountOverview;