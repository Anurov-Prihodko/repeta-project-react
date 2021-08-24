import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

/*
Modal window
Проблема z-index, как решить без костылей (порталы)
Слушатель для keydown для Escape
Слушатель на клик по backdrop
*/

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      //   console.log('Нажали Escape');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('Click on Backdrop');
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    //   console.log('currentTarget', e.currentTarget);
    // console.log('target', e.target);
  };

  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
