import React from 'react';
import s from './TaskName.module.css';

const TaskName = ({ children }) => {

  return (
    <p className={s.text}>
      {children}
    </p>
  )
}

export default TaskName