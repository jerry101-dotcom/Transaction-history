import StatusDropDown from "../components/statusDropDown/StatusDropDown"
import "./TransactionPageStyle.css"
import transactionData from "../data/TransactionData"
import { useState } from "react"

function TransactionPage() {
  const [transactions] = useState(transactionData)
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredTransactions =
    statusFilter === "All"
      ? transactions
      : transactions.filter(
        t => t.transactionStatus === statusFilter
      )

  return (
    <main className="transaction-main">
      <div>
        <h3>Transactions</h3>
        <StatusDropDown
          selected={statusFilter}
          onChange={setStatusFilter}
        />
      </div>

      <ul className="transaction-page-ul">
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            <div className="transaction-info">
              {transaction.statusFont}
              <div>
                <p className="purpose">{transaction.transactionInfo}</p>
                <p className="date">{transaction.transactionDate}</p>
              </div>
            </div>

            <div className="transaction-amount">
              <h4>{transaction.transactionInfo.includes("Receieved") ? "+" : transaction.transactionInfo.includes("Transfer") ? "-" : ""}{transaction.transactionAmount}</h4>
              <p
                className={
                  transaction.transactionStatus === "Successful"
                    ? "successful"
                    : transaction.transactionStatus === "Failed"
                      ? "failed"
                      : "pending"
                }
              >
                {transaction.transactionStatus}
              </p>
              <p className="transaction-id">id: {transaction.id}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default TransactionPage
