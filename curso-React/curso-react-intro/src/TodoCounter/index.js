import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return(
    completed === total && completed > 0 
      ?
        <h1 className='TodoCounter'>
          Enhorabuenaaa!!! Completaste tu ToDo list!!! YUHHUUUU!!!!
        </h1>
      :
        <h1 className='TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
  );
}

export { TodoCounter }