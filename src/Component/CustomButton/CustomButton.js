import React from 'react';
import './CustomButton.scss'

export default React.memo(function CustomButton(props) {
  return (
    <button onClick={props.handleClick ? () => props.handleClick() : undefined} className={props.class}>
      {props.txt}
    </button>
  )
})
