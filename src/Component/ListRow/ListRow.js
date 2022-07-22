import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { BsThreeDots } from 'react-icons/bs';
import './ListRow.scss';

export default function ListRow(props) {
  const [status, setStatus] = useState(props.status);

  const changeStatus = () => {
    status === 'completed' ? setStatus('notStarted') : setStatus('completed');
  };

  return (
    <div className='list-row'>
      <div className='list-row__data-container'>
        <label className='list-row__checkbox__label'>
          <input
            type='checkbox'
            className='list-row__checkbox'
            checked={status === 'completed' ? true : false}
            onChange={() => changeStatus()}
          />
        </label>
        <p
          className={
            'list-row__txt' + (status === 'completed' ? ' completed' : '')
          }
        >
          {props.name}
        </p>
      </div>
      <CustomButton
        txt={<BsThreeDots />}
        class='list-row__button dot-button s'
      />
    </div>
  );
}
