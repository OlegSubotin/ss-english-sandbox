import React, {useState} from 'react';
import s from './Input.module.css';
import Button from 'components/Button';
import InputItem from './InputItem';
import TaskName from 'components/TaskName';


const Input = ({ task }) => {
  const [userResult, setUserResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showItemResult, setShowItemResult] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const onCheckBtnClick = () => {
    setShowResult(prevState => !prevState);
    setShowItemResult(prevState => !prevState);
    setShowCorrectAnswer(false);
  };

  return (
    <>
      <TaskName>{task.taskName}</TaskName>
      <ol className={s.questionsList}>
        {task.questions.map(({id, part1, part2, correct }) => (
          <InputItem
            key={id}
            part1={part1}
            part2={part2}
            correctAnswer={correct}
            showItemResult={showItemResult}
            setUserResult={setUserResult}
            userResult={userResult}
            maxUserResult={task.questions.length}
            showCorrectAnswer={ showCorrectAnswer}
          />
        ))}
      </ol>
      <Button onClick={onCheckBtnClick}>
        Check
      </Button>
      {showResult && <p className={s.resultText}>Your result is: &nbsp;{userResult}/{task.questions.length}</p>}
    </>
  )
};

export default Input