
import { FaArrowDown, FaArrowUp , FaMinus} from "react-icons/fa"
import { FiX } from "react-icons/fi"


const transactionData :{
    id: string,
    statusFont : React.ReactNode,
    transactionInfo : string,
    transactionDate : string,
    transactionAmount : string,
    transactionStatus : string
}[]= [
    { id: "sisu62",
      statusFont : <FaArrowUp className="transfer-font font" />,
      transactionInfo : "Transfer to Lucky Deborah",
      transactionDate : new Date().toLocaleString(),
      transactionAmount : `$${7000}`,
      transactionStatus : "Successful"
    },
    {
        id: "82y79h",
        statusFont : <FaArrowDown className="recieved-font font" />,
        transactionInfo : "Receieved from Nvidia Corporation",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${50000}`,
        transactionStatus : "Successful"
      },
      {
        id: "987wsy",
        statusFont : <FaMinus className="pending-font font" />,
        transactionInfo : "MTN Airtime Purchase",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${5000}`,
        transactionStatus : "Pending"
      },
      {
        id: "wsh2sj",
        statusFont : <FaArrowDown className="recieved-font font" />,
        transactionInfo : "Receieved from Cowrywise Investment",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${10000}`,
        transactionStatus : "Successful"
      },
      {
        id: "9892zj",
        statusFont : <FiX className="failed-font font" />,
        transactionInfo : "Purchase of MTN Airtime",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${2000}`,
        transactionStatus : "Failed"
      },
      {
        id: "sl27sy",
        statusFont : <FaArrowUp className="transfer-font font" />,
        transactionInfo : "Transfer to Fedearal Government of Nigeria",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${10000}`,
        transactionStatus : "Successful"
      },
      {
        id: "sp2jkz",
        statusFont : <FaMinus className="pending-font font" />,
        transactionInfo : "Transfer to Kiesha Tsotskey",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${1500}`,
        transactionStatus : "Pending"
      },
      {
        id: "28wyj9",
        statusFont : <FiX className="failed-font font" />,
        transactionInfo : "Airtel Data Subscription",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${2000}`,
        transactionStatus : "Failed"
      },
]


export default transactionData;