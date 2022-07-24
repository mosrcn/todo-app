import { ITask } from '@/types/tasks.type';
import { createAction } from '@reduxjs/toolkit';

export const createTask = createAction<ITask>('tasks/create');
export const updateTask = createAction<ITask>('tasks/update');
export const deleteTask = createAction<string>('tasks/delete');
