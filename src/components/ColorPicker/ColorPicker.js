import React, { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionsClassName = index => {
    const optionClasses = [s.options];

    if (index === this.state.activeOptionsIdx) {
      optionClasses.push(s.active);
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionsIdx];

    return (
      <div className={s.colorPicker}>
        <h2 className={s.title}>Color Picker</h2>
        <p className={s.text}>Выбран цвет: {label} </p>
        <div className={s.pug}>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionsClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
