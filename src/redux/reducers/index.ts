import { combineReducers } from '@reduxjs/toolkit';

import tasks from './tasks.reducer';

const rootReducer = combineReducers({
  tasks,
});

export default rootReducer;
