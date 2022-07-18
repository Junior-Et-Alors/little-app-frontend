import { configureStore } from '@reduxjs/toolkit';
import todoLisrReducer from './features/todo/todoList'

export default configureStore({
  reducer: {
    todoList: todoLisrReducer,
  },
});
