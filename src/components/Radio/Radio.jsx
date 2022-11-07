import React, {useState} from 'react';
import s from './Radio.module.css';
import Button from 'components/Button';
import RadioItem from './RadioItem';
import TaskName from 'components/TaskName';


const Radio = ({ task }) => {
  const [userResult, setUserResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showItemResult, setShowItemResult] = useState(false);

  const onCheckBtnClick = () => {
    setShowResult(prevState => !prevState);
    setShowItemResult(prevState => !prevState);
  };

  return (
    <>
      <TaskName>{task.taskName}</TaskName>
      <ol className={s.questionsList}>
        {task.questions.map(({id, question , correct, answers }) => (
          <RadioItem
            key={id}
            question={question}
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

export default Radio