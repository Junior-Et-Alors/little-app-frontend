import React from 'react';
import './CustomButton.scss'

export default function CustomButton(props) {
  return (
    <button onClick={() => console.log('click')} className={props.class}>
      {props.txt}
    </button>
  )
}
