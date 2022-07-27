import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    allToDoLists: [],
  },
  reducers: {
    getToDoLists: (state, action) => {
      state.allToDoLists = [action.payload];
    },
    addTodoList: (state, action) => {
      state.allToDoLists.push(action.payload)
    },
    removeTodoList: (state, action) => {
      state.allToDoLists = state.allToDoLists.filter(toDoList => toDoList.id !== action.payload)
    }
  },
});


export const getToDoLists = () => async (dispatch) => {
  /*
  axios
    .get('API URL', {
      param, header, token, auth ....
    })
    .then((res) => {
      dispatch(getToDoLists(response.data))
    })
  */
}