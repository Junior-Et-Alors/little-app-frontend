import React, {useState} from 'react';
import Header from '../../Layouts/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { todoLists } from '../../redux/features/todo/todoList';
import CustomButton from '../../Component/CustomButton/CustomButton';
import ListBox from '../../Component/ListBox/ListBox';
import { BsPlusLg } from 'react-icons/bs';
import './ToDoPage.scss';

export default function TodoPage() {

  const allTodoLists = useSelector(todoLists);

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    console.log(modal);
  }

  return (
    <>
      <Header />
      <main className='todo-page'>
        <div className='todo-page__header'>
          <h1>Mes TODO</h1>
          <CustomButton
            txt={<BsPlusLg />}
            class='todo-page__add-button add-button'
            handleClick={toggleModal}
          />
        </div>
        {allTodoLists.map((list) => {
          return <ListBox key={list.id} {...list} />;
        })}
      </main>
    </>
  );
}
