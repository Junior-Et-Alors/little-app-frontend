import React from 'react';
import Header from '../../Layouts/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { todoListsData } from '../../redux/features/todo/todoList';

export default function TodoPage() {

  const todoLists = useSelector(todoListsData)

  console.log(todoLists);


  return (
    <div>
    <Header />
    TodoPage
    </div>
  )
}
