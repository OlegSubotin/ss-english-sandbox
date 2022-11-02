import React from 'react';
import s from './TaskName.module.css';

const TaskName = ({ children }) => {

  return (
    <p className={s.text}>
      Task: &nbsp;{children}
    </p>
  )
}

export default TaskName