import React from 'react';
import s from './Todo.module.css';

const Todo = ({ text, completed, onTogleCompleted, onDelete }) => (
  <div className={s.item}>
    <input
      type="checkbox"
      className={s.checkbox}
      checked={completed}
      onChange={onTogleCompleted}
    />
    <p className={s.text}>{text}</p>
    <button type="button" className={s.pug} onClick={onDelete}>
      Удалить
    </button>
  </div>
);

export default Todo;
