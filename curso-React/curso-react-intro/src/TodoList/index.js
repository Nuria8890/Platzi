import './TodoList.css';

function TodoList({children}) {
  return(
    <div className='TodoList-div'>
      <ul className='TodoList'>
        {children}
      </ul>
    </div>
  );
}

export { TodoList }