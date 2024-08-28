import '../css/TodoItem.css';
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DelteIcon";


function TodoItem(props) {
  return(
    <li className='TodoItem'>
      <CompleteIcon
        onComplete={props.onComplete}
        completed={props.completed === true}
      />

      <p
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export {TodoItem}