import React from 'react'

export default function CustomButton(props) {
  return (
    <button onClick={() => console.log('click')}>
      {props.txt}
    </button>
  )
}
