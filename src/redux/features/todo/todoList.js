import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    allToDoLists: [
      {
        name: '1ère todo',
        id: 1,
        task: [{
          name: 'tâche 1',
          id: 1,
          priority: 'low',
          status: 'notStarted',
        },
        {
          name: 'tâche 2',
          id: 2,
          priority: 'low',
          status: 'notStarted',
        },
        {
          name: 'tâche 3',
          id: 3,
          priority: 'low',
          status: 'notStarted',
        },
      ],
      },
      {
        name: '2ème todo',
        id: 2,
        task: [{
          name: 'tâche 4',
          id: 4,
          priority: 'low',
          status: 'completed',
        },
        {
          name: 'tâche 5',
          id: 5,
          priority: 'low',
          status: 'notStarted',
        },
      ],
      },
    ],
  },
  reducers: {
    getToDoLists: (state, action) => {
      state.allToDoLists = [action.payload];
    },
    addTodoList: (state, action) => {
      state.allToDoLists.push(action.payload);
    },
    removeTodoList: (state, action) => {
      state.allToDoLists = state.allToDoLists.filter(
        (toDoList) => toDoList.id !== action.payload
      );
    },
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
};

export const todoLists = (state) => state.todoList.allToDoLists;
export default todoListSlice.reducer;
