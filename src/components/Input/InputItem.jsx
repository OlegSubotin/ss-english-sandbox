import React, { useState } from 'react';
import { FcApproval, FcCancel } from 'react-icons/fc';
import s from './InputItem.module.css';

const InputItem = ({
  part1,
  part2,
  correctAnswer,
  showItemResult,
  setUserResult,
  userResult,
  maxUserResult
}) => {
  const [correct, setCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const onShowCorrectClick = () => {
    setShowAnswer(prevState => !prevState);
  }

  const onInputChange = (e, correctAnswer) => {
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
      <input className={s.input} onChange={e => onInputChange(e, correctAnswer)}>
      </input>
      &nbsp;
      <span className={s.text}>{part2}</span>
      &nbsp;
      {showItemResult &&
        <>
          <span className={s.icon}>
            {correct ? <FcApproval /> : <FcCancel />}
          </span>
          {showAnswer && <p className={s.correctAnswer}>Correct answer: {correctAnswer}</p>}
          <button type='button' className={s.correctBtn} onClick={onShowCorrectClick}>
            show answer
          </button>
          
        </>
      }
    </li>
  )
};

export default InputItem