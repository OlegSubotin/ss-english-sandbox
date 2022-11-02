import React, {useState} from 'react';
import s from './Select.module.css';
import Button from 'components/Button';
import SelectItem from './SelectItem';
import TaskName from 'components/TaskName';


const Select = ({ task }) => {
  const [userResult, setUserResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showItemResult, setShowItemResult] = useState(false);

  const onCheckBtnClick = () => {
    setShowResult(true);
    setShowItemResult(true);
  };

  return (
    <>
      <TaskName>{task.taskName}</TaskName>
      <ol className={s.questionsList}>
        {task.questions.map(({id, part1, part2, correct, answers }) => (
          <SelectItem
            key={id}
            part1={part1}
            part2={part2}
            correctAnswer={correct}
            answers={answers}
            showItemResult={showItemResult}
            setUserResult={setUserResult}
            userResult={userResult}
            maxUserResult={task.questions.length}
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

export default Select