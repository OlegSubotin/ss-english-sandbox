import React from 'react';
import s from './Text.module.css';

const Text = ({ children }) => {
  console.log(children);
  return (
    <p className={s.text}>
      {children}
    </p>
  )
}

export default Text