import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    login: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  loginInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenceCgange = e => {
    console.log(e.currentTarget.checked);

    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', login: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <br />
          <label htmlFor={this.loginInputId}>
            Login
            <input
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
              id={this.loginInputId}
            />
          </label>
          <p>Ваш уровень:</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceCgange}
            />
            I agree with the terms
          </label>
          <br />
          <button type="submit" disabled={!this.state.licence}>
            Send
          </button>
        </form>
      </>
    );
  }
}

export default Form;
