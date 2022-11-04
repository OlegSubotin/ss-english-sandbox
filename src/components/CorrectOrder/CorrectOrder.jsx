import React from 'react';
import TaskName from 'components/TaskName';
import CorrectOrderItem from './CorrectOrderItem';
import s from './CorrectOrder.module.css'

const CorrectOrder = ({ task }) => {
  return (
    <>
      <TaskName>{task.taskName}</TaskName>
      <ol className={s.list}>
        {
          task.questions.map(({ id, pieces, correct }) => (
            <CorrectOrderItem
              key={id}
              pieces={pieces}
              correct={correct}
            />
          ))
        }
      </ol>
    </>
  )
};

export default CorrectOrder