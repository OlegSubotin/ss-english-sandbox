import React, { useState, useEffect } from 'react';
import s from './CorrectOrderItem.module.css';

const CorrectOrderItem = ({ pieces, correct }) => {
  const [visibleBtnContent, setVisibleBtnContent] = useState();
  const [randomSortedPieces, setRandomSortedPieces] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    let sortedArr = randomizeArray(pieces);
    setRandomSortedPieces(sortedArr);
  }, [pieces]);

  const randomizeArray = array => {
    let randomizedArray = array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return randomizedArray;
  }

  const onVisibleBtnClick = e => {
    setVisibleBtnContent(e.target.innerHTML);
    e.target.className = s.clicked;
  };

  const onHiddenBtnClick = e => {
    e.target.innerHTML = visibleBtnContent ? visibleBtnContent : '';
    if (e.target.id.trim() === visibleBtnContent.trim()) {
      e.target.className = s.green;
    } else {
      e.target.className = s.red;
    }
  }

  const onCorrectAnswerClick = () => {
    setShowAnswer(prevState => !prevState);
  }

  return (
    <li className={s.mainItem}>
      <ul className={s.visibleButtons}>
        {randomSortedPieces?.map(({ id, text }) => (
          <li key={id}>
            <button type='button' className={s.button} onClick={onVisibleBtnClick}>{text}</button>
          </li>
        ))}
      </ul>
      <ul className={s.visibleButtons}>
        {pieces.map(({ id, text }) => (
          <li key={id}>
            <button className={s.smallButton} type='button' id={text} onClick={onHiddenBtnClick}></button>
          </li>
        ))}
      </ul>
      <div className={s.wrapper}>
        {showAnswer && <p className={s.text}>{correct}</p>}
        <button type='button' className={s.correctBtn} onClick={onCorrectAnswerClick}>show correct answer</button>
      </div>
    </li>
  );
}

export default CorrectOrderItem;