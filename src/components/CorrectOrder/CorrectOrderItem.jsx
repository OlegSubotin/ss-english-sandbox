import React, { useState, useEffect } from 'react';
import s from './CorrectOrderItem.module.css';

const CorrectOrderItem = ({ pieces }) => {
  const [visibleBtnContent, setVisibleBtnContent] = useState();
  const [randomSortedPieces, setRandomSortedPieces] = useState();

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
    setVisibleBtnContent(e.target.innerHTML)
  };

  const onHiddenBtnClick = e => {
    console.log(e.target.id) ;
    e.target.innerHTML = visibleBtnContent;
    if (e.target.id.trim() === visibleBtnContent.trim()) {
      e.target.className = s.green;
    } else {
      e.target.className = s.red;
    }
  }

  return (
    <>
      <ul className={s.visibleButtons}>
        {randomSortedPieces?.map(({ id, text }) => (
            <li key={id}>
              <button type='button' onClick={onVisibleBtnClick}>{text}</button>
            </li>
          ))}
      </ul>
      <ul className={s.visibleButtons}>
        {pieces.map(({ id, text }) => (
            <li key={id}>
            <button type='button' id={text} onClick={onHiddenBtnClick}></button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default CorrectOrderItem;