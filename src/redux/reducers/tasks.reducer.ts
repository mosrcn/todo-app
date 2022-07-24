import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from '@/types/tasks.type';
import dayjs from '@/utils/dayjs';
import { createTask, updateTask, deleteTask } from '../actions/tasks.action';

const initialState: ITask[] = [];

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(createTask, (state, action) => {
    const date = dayjs().utc().format();
    return [...state, { ...action.payload, id: uuidv4(), createdAt: date, updatedAt: date }];
  });
  builder.addCase(updateTask, (state, action) => {
    return state.map((task) =>
      task.id === action.payload.id ? { ...task, ...action.payload, updatedAt: dayjs().utc().format() } : task
    );
  });
  builder.addCase(deleteTask, (state, action) => {
    return state.filter((task) => task.id !== action.payload);
  });
});

export default reducer;
