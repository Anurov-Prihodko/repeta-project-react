import React, { Component } from 'react';
import Controls from './Controls';
import s from './Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    countValue: 0,
  };

  state = {
    value: this.props.countValue,
  };

  // ==== ИЗМЕНИТЬ СОСТОЯНИЕ ОТ ПРЕДИДУЩЕГО ОДИН РАЗ ====
  //   handleIncrement = () => {
  //     this.setState({
  //       value: 1,
  //     });
  //   };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.counter}>
        <span className={s.value}>{value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Feedback;
