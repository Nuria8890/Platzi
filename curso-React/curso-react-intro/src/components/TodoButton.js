import '../css/TodoButton.css';

function TodoButton() {
  return(
    <div className='TodoButton-div'>
      <button
        className='TodoButton'
        onClick={
          (event) => {
            console.log("Has hecho click en 'Añadir otra tarea'");
            console.log(event);
            console.log(event.target);
          }
        }
      >Añade otra tarea
      </button>
    </div>
    
  );
}

export {TodoButton}