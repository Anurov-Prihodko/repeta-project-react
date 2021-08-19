import React from 'react';
import s from './Feedback.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={s.controls}>
    <button type={s.button} onClick={onIncrement}>
      Плюс 1
    </button>
    <button type={s.button} onClick={onDecrement} className={s.pug}>
      Минус 1
    </button>
  </div>
);

export default Controls;
