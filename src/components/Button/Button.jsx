import React from 'react';
import s from './Button.module.css';

const Button = ({children, type, onClick}) => {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button