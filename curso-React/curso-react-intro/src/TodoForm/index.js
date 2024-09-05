import React from "react";
import './TodoForm.css'

function TodoForm() {
  return(
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Ir a entrenar"
      />
      <div className="TodoForm-button-container">
      <button
        type="submit"
        className="TodoForm-button TodoForm-button-add">
        Add
      </button>
      <button
        type="cancel"
        className="TodoForm-button TodoForm-button-cancel">
        Cancelar
      </button>
      </div>
    </form>
  );
}

export { TodoForm }