import React from 'react';
import classNames from 'classnames';

import Todo from '../Todo';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onTogleCompleted }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={classNames(s.item, { [s.completed]: completed })}>
        <Todo
          text={text}
          completed={completed}
          onTogleCompleted={() => onTogleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
