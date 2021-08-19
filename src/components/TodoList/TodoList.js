import React from 'react';
import s from '././TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{text}</p>
        <button
          type="button"
          className={s.pug}
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
