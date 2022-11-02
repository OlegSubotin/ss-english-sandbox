import React, { useState } from 'react';
import {FcApproval, FcCancel} from 'react-icons/fc';
import s from './SelectItem.module.css';

const SelectItem = ({
  part1,
  part2,
  correctAnswer,
  answers,
  showItemResult,
  setUserResult,
  userResult,
  maxUserResult
}) => {
  const [correct, setCorrect] = useState(false);

  const onSelectChange = (e, correctAnswer) => {
    let usersAnswer = e.target.value;
    if (usersAnswer.trim() === correctAnswer.trim()) {
      setCorrect(true);
      if (userResult < maxUserResult) {
        setUserResult(prevState => prevState += 1);
      }
    } else {
      setCorrect(false);
    }
  };

  return (
    <li className={s.item}>
      <span className={s.text}>{part1}</span>
      &nbsp;
      <select className={s.select} onChange={e => onSelectChange(e, correctAnswer)}>
        {answers.map((answer) => (
          <option key={answer.id} value={answer.answer}>{answer.answer}</option>
        ))}
      </select>
      &nbsp;
      <span className={s.text}>{part2}</span>
      &nbsp;
      {showItemResult && <span className={s.icon}>{correct ? <FcApproval/> : <FcCancel/>}</span>}
    </li>
  )
};

export default SelectItem