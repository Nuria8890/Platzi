import React from 'react'
import { TodoIcon } from './TodoIcon';

function CompleteIcon({onComplete, completed}) {
  return(
    <div>
    <TodoIcon
      type='check'
      completed={completed}
      onClick={onComplete}
    />
    <span>{completed}</span>
    </div>
  );
}

export {CompleteIcon};