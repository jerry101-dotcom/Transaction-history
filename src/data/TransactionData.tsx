
import { FaArrowDown, FaArrowUp , FaMinus} from "react-icons/fa"
import { FiX } from "react-icons/fi"


const transactionData :{
    statusFont : React.ReactNode,
    transactionInfo : string,
    transactionDate : string,
    transactionAmount : string,
    transactionStatus : string
}[]= [
    {
      statusFont : <FaArrowUp className="transfer-font font" />,
      transactionInfo : "Transfer to Lucky Deborah",
      transactionDate : new Date().toLocaleString(),
      transactionAmount : `$ ${7000}`,
      transactionStatus : "Successful"
    },
    {
        statusFont : <FaArrowDown className="recieved-font font" />,
        transactionInfo : "Receieved from Nvidia Corporation",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$ ${50000}`,
        transactionStatus : "Successful"
      },
      {
        statusFont : <FaMinus className="pending-font font" />,
        transactionInfo : "MTN Airtime Purchase",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$ ${5000}`,
        transactionStatus : "Pending"
      },
      {
        statusFont : <FaArrowDown className="recieved-font font" />,
        transactionInfo : "Receieved from Cowrywise Investment",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$ ${10000}`,
        transactionStatus : "Successful"
      },
      {
        statusFont : <FiX className="failed-font font" />,
        transactionInfo : "Purchase of MTN Airtime",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$${2000}`,
        transactionStatus : "Failed"
      },
      {
        statusFont : <FaArrowUp className="transfer-font font" />,
        transactionInfo : "Transfer to Fedearal Government of Nigeria",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$ ${10000}`,
        transactionStatus : "Successful"
      },
      {
        statusFont : <FaMinus className="pending-font font" />,
        transactionInfo : "Transfer to Kiesha Tsotskey",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$ ${1500}`,
        transactionStatus : "Pending"
      },
      {
        statusFont : <FiX className="failed-font font" />,
        transactionInfo : "Airtel Data Subscription",
        transactionDate : new Date().toLocaleString(),
        transactionAmount : `$ ${2000}`,
        transactionStatus : "Failed"
      },
]

console.log(transactionData);

export default transactionData;