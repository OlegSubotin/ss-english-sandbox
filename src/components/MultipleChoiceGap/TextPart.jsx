import React from 'react';
import s from './TextPart.module.css';

const TextPart = ({ questions, onClick }) => {

  return (
    <ul className={s.list}>
      {questions &&
        questions.map(({ part1, part2, id, correct }) => (
          <li key={id} className={s.item}>
            <p className={s.text}>{part1}</p>
            &nbsp;
            <button id={correct} className={s.button} onClick={onClick}></button>
            &nbsp;
            <p className={s.text}>{part2}</p>
          </li>
        ))
      }
    </ul>
  )
};

export default TextPart