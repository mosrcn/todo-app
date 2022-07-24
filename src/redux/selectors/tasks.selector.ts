import _ from 'lodash';

import { RootState } from '../store';

export const tasksSelector = (state: RootState) => _.sortBy(state.tasks, ['isCompleted']);
