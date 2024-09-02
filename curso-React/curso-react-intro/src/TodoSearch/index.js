import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return(
    <div className='TodoSearch-div'>
      <input
        className='TodoSearch'
        placeholder="Busca una tarea, ej.: cortar cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch }