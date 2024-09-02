import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./TodoIcon.css"

const iconTypes = {
  "check": <FaCheckCircle />,
  "delete": <MdDelete />
}

function TodoIcon({ type, onClick, completed }) {
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <span
        className={`Icon Icon-${type} ${completed && "Icon-p--complete"}`}
        onClick={onClick}
      >
        {iconTypes[type]}
        </span>
    </IconContext.Provider>
  )
}

export { TodoIcon }