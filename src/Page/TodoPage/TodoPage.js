import React from 'react';
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

  console.log(allTodoLists);

  return (
    <>
      <Header />
      <main className='todo-page'>
        <div className='todo-page__header'>
          <h1>Mes TODO</h1>
          <CustomButton
            txt={<BsPlusLg />}
            class='todo-page__add-button add-button'
          />
        </div>
        {allTodoLists.map((list) => {
          return <ListBox key={uuidv4()} {...list} />;
        })}
      </main>
    </>
  );
}
