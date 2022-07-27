import React from 'react';
import './Modal.scss';

export default function Modal(props) {
  return (
    <div className='modal__overlay'>
      {props.children}
    </div>
  );
}
