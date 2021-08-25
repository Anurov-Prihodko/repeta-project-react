import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} className={s.text} />
  </label>
);

export default Filter;
