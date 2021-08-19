import React, { Component } from 'react';
// import Feedback from './components/Feedback';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';

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
      { id: 'id-1', text: 'Выучить основы React', copmleted: false },
      { id: 'id-2', text: 'Разобраться с React Router', copmleted: false },
      { id: 'id-3', text: 'Пережить Redux', copmleted: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodosCount = todos.length;
    const completeTodosCount = todos.reduce(
      (acc, todo) => (todo.copmleted ? acc + 1 : acc),
      0,
    );

    return (
      <>
        {/* <ColorPicker options={colorPickerOptions} />
        <hr />
        <Dropdown />
        <hr />
        <Feedback /> */}
        <div>
          <p>Всего: {totalTodosCount}</p>
          <p>Ко-во выполненных: {completeTodosCount} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// const App = () => (
//   <>
//     <ColorPicker options={colorPickerOptions} />
//     <hr />
//     <Dropdown />
//     <hr />
//     <Feedback />
//   </>
// );

export default App;
