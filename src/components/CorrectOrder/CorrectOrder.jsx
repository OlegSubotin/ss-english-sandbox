import React from 'react';
import TaskName from 'components/TaskName';
import CorrectOrderItem from './CorrectOrderItem';
// import s from './CorrectOrder.module.css';

const CorrectOrder = ({ task }) => {
  return (
    <>
      <TaskName>{task.taskName}</TaskName>
      {
        task.questions.map(({ id, pieces, correct }) => (
          <CorrectOrderItem 
            key={id}
          pieces={pieces}
          />
          // <p>{correct}</p>
          // <>
          //   <ul className={s.visualButtons}>
          //     {pieces.map(value => ({ value, sort: Math.random() }))
          //       .sort((a, b) => a.sort - b.sort)
          //       .map(({ value }) => value)
          //       .map(({ id, text }) => (
          //         <li key={id}>
          //           <button type='button' onClick={onVariantBtnClick}>{text}</button>
          //         </li>
          //       ))}
          //   </ul>
          //   <ul className={s.hiddenButtons}>
          //     {pieces.map(({ id, text }) => (
          //       <li key={id}>
          //         <button type='button' id={text}></button>
          //       </li>
          //     ))}
          //   </ul>
          // </>
        ))
      }
    </>
  )
};

export default CorrectOrder