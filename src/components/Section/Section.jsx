import React from 'react';
import s from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section className={s.wrapper}>
      {children}
    </section>
  )
};

export default Section