import React, { Component } from 'react';
import shortid from 'shortid';

// import Form from './components/Form';
// import Feedback from './components/Feedback';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: false },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
      { id: 'id-4', text: 'Попробовать React Hooks', completed: false },
    ],
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  togleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли тот туду который нужно');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  hangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodosCount = todos.length;
    const completeTodosCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <ColorPicker options={colorPickerOptions} />
        <hr />
        <Dropdown />
        <hr />
        <Feedback /> */}
        <div>
          <p>Всего: {totalTodosCount}</p>
          <p>Ко-во выполненных: {completeTodosCount} </p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.hangeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onTogleCompleted={this.togleCompleted}
        />
      </>
    );
  }
}

// const App = () => (
//   <>
//     {/* <ColorPicker options={colorPickerOptions} /> */}
//     {/* <hr />
//     <Dropdown />
//     <hr />
//     <Feedback /> */}
//   </>
// );

export default App;
