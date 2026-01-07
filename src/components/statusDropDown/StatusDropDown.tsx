import { useState } from "react"
import "./style.css"

function StatusDropDown({ selected, onChange }:{ selected: string, onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false)

  const options = ["All", "Successful", "Failed", "Pending"]

  const handleSelect = (value : string) => {
    onChange(value)
    setOpen(false)
  }

  return (
    <section className="status-dropdown">
      <div className="dropdown-header" onClick={() => setOpen(p => !p)}>
        <p className={`status-${selected.toLowerCase()}`}>{selected}</p>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <ul className="dropdown-list">
          {options
            .filter(item => item !== selected)
            .map(item => (
              <li
                key={item}
                onClick={() => handleSelect(item)}
                className={`status-${item.toLowerCase()}`}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </section>
  )
}

export default StatusDropDown
