import './TodoButton.css';

function TodoButton({ setOpenModal }) {
  return(
    <div className='TodoButton-div'>
      <button
        className='TodoButton'
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
      >Añade otra tarea
      </button>
    </div>
  );
}

export { TodoButton };