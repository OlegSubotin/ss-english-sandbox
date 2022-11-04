import React, { useState } from 'react';
import TaskName from 'components/TaskName';
import Variants from './Variants';
import TextPart from './TextPart';
import s from './MultipleChoiceGap.module.css'

const CorrectOrder = ({ task }) => {
  const [userVariant, setUserVariant] = useState();
  const onVariantClick = e => {
    setUserVariant(e.target.innerHTML.trim())
  }

  const onAnswerClick = e => {
    const event = e.target;
    if (!userVariant) {
      return;
    }
    event.innerHTML = userVariant;
    if (event.id.trim() === userVariant) {
      event.className = s.green
    } else {
      event.className = s.red
    }
  }
  
  return (
    <>
      <TaskName>{task.taskName}</TaskName>
      <Variants variants={task.variants} onClick={onVariantClick} />
      <TextPart questions={task.questions} onClick={onAnswerClick} />
    </>
  )
};

export default CorrectOrder