import React, { useState, useEffect } from 'react';
import s from './Variants.module.css';

const Variants = ({ variants, onClick }) => {
  const [randomSortedVariants, setRandomSortedVariants] = useState();

  useEffect(() => {
    let sortedArr = randomizeArray(variants);
    setRandomSortedVariants(sortedArr);
  }, [variants]);

  const randomizeArray = array => {
    let randomizedArray = array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return randomizedArray;
  }

  return (
    <ul className={s.list}>
      {randomSortedVariants?.map(({ id, text }) => (
        <li key={id} className={s.item}>
          <button type='button' className={s.button} onClick={onClick} >{text}</button>
        </li>
      ))}
    </ul>
  )
};

export default Variants