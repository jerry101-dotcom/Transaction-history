import { useState } from "react"

import "./style.css"
//▲
function StatusDropDown() {
 const [showDropDownList, setShowDropDownList] =  useState(false)


 const handleDropDown = () => {
    setShowDropDownList( prev => !prev)
 }

  return (
    <section className="status-dropdown">
        <div onClick={handleDropDown} className="dropdown-header">
            <p>All</p>
            <span>{showDropDownList ? "▲" : "▼"}</span>
        </div>
        { showDropDownList ? 
       ( <ul className="dropdown-list">
            <li className="status-successful">Successful</li>
            <li className="status-failed">Failed</li>
            <li className="status-pending">Pending</li>
            <li className="status-reversed">Reversed</li>
        </ul>)  : null}
    </section>
  )
}
export default StatusDropDown