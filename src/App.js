import React, { Component } from 'react';
import shortid from 'shortid';
// import todos from './todos.json';
// import Form from './components/Form';
// import Feedback from './components/Feedback';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Modal from './components/Modal';

// import Clock from './components/Clock';
import Container from './components/Container';
import IconButton from './components/IconButton';
// import Tabs from './components/Tabs';
// import tabs from './tabs.json';
import { ReactComponent as AddIcon } from './icons/plus.svg';

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
    todos: [],
    filter: '',
    showModal: false,
  };

  // --- НАЧАЛЬНЫЙ СТЕЙТ ---
  componentDidMount() {
    // console.log('Записываю начальное состояние state');

    const todos = localStorage.getItem('todos');
    const parseTodos = JSON.parse(todos);

    if (parseTodos) {
      this.setState({ todos: parseTodos });
    }
  }

  // --- СТЕЙТ ПОСЛЕ ОБНОВЛЕНИЯ ---
  componentDidUpdate(prevProps, prevState) {
    // console.log('Обновлю поле todos, записываю todos в хранилище');
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      // console.log('Обновилось поле todos');

      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const totalTodosCount = todos.length;
    const completeTodosCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <Tabs items={tabs} /> */}

        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="30" height="30" fill="rgb(255, 237, 79)" />
        </IconButton>

        {/* --- Open modal button --- */}
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            {/* <h1>Hello pug</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p> */}
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <hr />
        <Dropdown />
        <hr />
        <Feedback /> */}
        <div>
          <p>Всего: {totalTodosCount}</p>
          <p>Ко-во выполненных: {completeTodosCount} </p>
        </div>

        <Filter value={filter} onChange={this.hangeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onTogleCompleted={this.togleCompleted}
        />
      </Container>
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
