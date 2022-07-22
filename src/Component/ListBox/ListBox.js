import React from 'react';
import ListRow from '../ListRow/ListRow';
import { v4 as uuidv4 } from 'uuid';
import CustomButton from '../CustomButton/CustomButton';
import { BsThreeDots } from 'react-icons/bs';
import './ListBox.scss';

export default function ListBox(props) {
  return (
    <div className='list-box'>
      <div className='list-box__header'>
        <h2>{props.name}</h2>
        <CustomButton
          txt={<BsThreeDots />}
          class='list-box__header__button dot-button xl'
        />
      </div>
      {props.task.map((task) => {
        return <ListRow key={uuidv4()} {...task} />;
      })}
    </div>
  );
}
