import React, { Component } from 'react';
import s from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.todoEditor} onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          className={s.textarea}
        ></textarea>
        <button type="submit" className={s.button}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
