import React from 'react';
import s from './Select.module.css';


const Select = ({ task }) => {
  return (
    <>
      <h2>{task.taskName}</h2>
      <ul className={s.questionsList}>
        {
          task.questions.map((question) => (
            <li key={question.id}>
              <p>{question.part1}</p>
              <select>
                {question.answers.map((answer) => (
                  <option key={answer.id} value={answer.answer}>{answer.answer}</option>
                ))}
              </select>
              <p>{question.part2}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default Select