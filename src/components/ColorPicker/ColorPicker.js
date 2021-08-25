import React, { PureComponent } from 'react';
import classNames from 'classnames';
import s from './ColorPicker.module.css';

class ColorPicker extends PureComponent {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  // makeOptionsClassName = index => {
  //   return classNames(s.options, {
  //     [s.active]: index === this.state.activeOptionsIdx,
  //   });
  // };

  render() {
    console.log(`Re-render @ ${Date.now()}`);
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
              className={classNames(s.options, {
                [s.active]: index === activeOptionsIdx,
              })}
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
