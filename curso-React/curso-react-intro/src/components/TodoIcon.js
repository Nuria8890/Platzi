import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../css/TodoIcon.css"

const iconTypes = {
  "check": <FaCheckCircle />,
  "delete": <MdDelete />
}

function TodoIcon({ type }) {
  return (
    <IconContext.Provider value={{size: "25px" }}>
    <span
      className={`Icon Icon-${type}`}
    >
      {iconTypes[type]}
    </span>
    </IconContext.Provider>
  )
}

export {TodoIcon}