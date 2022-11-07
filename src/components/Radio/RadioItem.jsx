import React, { useState } from 'react';
import {FcApproval, FcCancel} from 'react-icons/fc';
import s from './RadioItem.module.css';

const RadioItem = ({
  question,
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
    console.log(usersAnswer, correctAnswer);
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
      <p className={s.text}>{question}</p>
      &nbsp;
      <form className={s.formWrapper} onChange={e => onSelectChange(e, correctAnswer)}>
        {answers.map((answer) => (
          <label key={answer.id} className={s.label} htmlFor={answer.id}>
            <input name='answer' id={answer.id} type="radio" className={s.input} value={answer.answer} />            
            <span className={s.span}>{answer.answer}</span>          
          </label>
        ))}
      </form>
      {showItemResult && <div className={s.icon}>{correct ? <FcApproval /> : <FcCancel />}</div>}
    </li>
  )
};

export default RadioItem