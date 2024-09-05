import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoForm.css';

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const[newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
  event.preventDefault();
  addTodo(newTodoValue);
  setOpenModal(true);
  };

  const onCancel = () => {
    setOpenModal(true);
    };

    const onChange = (event) => {
      setNewTodoValue(event.target.value);
      };

  return(
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        required
        placeholder="Ir a entrenar"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-button-container">

      <button
        type="button"
        className="TodoForm-button TodoForm-button-cancel"
        onClick={onCancel}
      >Cancelar</button>

      <button
        type="submit"
        className="TodoForm-button TodoForm-button-add"
      >Añadir</button>
      
      </div>
    </form>
  );
}

export { TodoForm }