import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './features/todo/todoList'

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
