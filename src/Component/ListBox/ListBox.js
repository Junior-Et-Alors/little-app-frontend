import React from 'react';
import ListRow from '../ListRow/ListRow';
import {v4 as uuidv4} from 'uuid'

export default function ListBox(props) {
  return (
    <div className='list-box'>
    {props.name}
    {props.task.map((task) => {
      return <ListRow key={uuidv4()} {...task} />
    })}
    </div>
  )
}
