import React from 'react';
import s from './Button.module.css';

const Button = ({ children, disabled, className, type, onClick }) => {
  return (
    <button
      disabled={disabled ? disabled : false}
      className={className ? className : s.button}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button