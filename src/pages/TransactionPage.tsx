import StatusDropDown from "../components/statusDropDown/StatusDropDown"
import { FaArrowDown } from "react-icons/fa"
import "./TransactionPageStyle.css"


function TransactionPage() {
  return (
    <main className="transaction-main">

        <div>
            <h3>Transactions</h3>
            <StatusDropDown />
        </div>

        <ul className="transaction-page-ul">
            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            <li>
                <div className="transaction-info">
                  <FaArrowDown className="recieved-font" />
                  <div>
                    <p className="purpose">Recieved from ELon Musk and all is whole startups</p>
                    <p className="date">Jan 6th, 22:14:30</p>
                  </div>
                </div>

                <div className="transaction-amount">
                    <h4>+$25,000,000</h4>
                    <p>Successful</p>
                </div>
                
            </li>

            
        </ul>
        
    </main>
  )
}
export default TransactionPage