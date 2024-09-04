import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total,
  } = React.useContext(TodoContext)

  return(
    completed === total && completed > 0 
      ?
        <h1 className='TodoCounter'>
          Enhorabuenaaa!!! Completaste tu ToDo list!!! YUHHUUUU!!!!
        </h1>
      :
        <h1 className='TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> ToDo's
        </h1>
  );
}

export { TodoCounter }