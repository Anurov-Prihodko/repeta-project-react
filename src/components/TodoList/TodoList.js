import React from 'react';
import classNames from 'classnames';
import s from '././TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onTogleCompleted }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={classNames(s.item, { [s.completed]: completed })}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onTogleCompleted(id)}
        />
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
