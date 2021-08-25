import { Component } from 'react';
import s from './Clock.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    console.log('clearInterval');
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={s.fase}>{this.state.time}</div>;
  }
}
