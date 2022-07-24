import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import _ from 'lodash';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { createTask, deleteTask, updateTask } from '@/redux/actions/tasks.action';
import { tasksSelector } from '@/redux/selectors/tasks.selector';
import { ITask } from '@/types/tasks.type';

const useTasks = () => {
  const dispatch = useAppDispatch();
  const allTasks = useAppSelector(tasksSelector);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const tasks = useMemo<ITask[]>(() => {
    return !search
      ? allTasks
      : allTasks.filter((task) => `${task.title} ${task.description}`.toLowerCase().includes(search.toLowerCase()));
  }, [allTasks, search]);

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedTask(null);
  }, []);

  const onCreateTask = useCallback(
    (data: ITask) => {
      dispatch(createTask(data));
      onCloseModal();
    },
    [dispatch, onCloseModal]
  );

  const onUpdateTask = useCallback(
    (id: string) => (data: ITask) => {
      dispatch(updateTask({ ...data, id }));
      onCloseModal();
    },
    [dispatch, onCloseModal]
  );

  const onDeleteTask = useCallback(
    (id: string) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  const onSearch = _.debounce(
    useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }, []),
    700
  );

  const onSelectTask = useCallback(
    (data: ITask) => {
      setSelectedTask(data);
      onOpenModal();
    },
    [onOpenModal]
  );

  return {
    tasks,
    selectedTask,
    openModal,
    onOpenModal,
    onCloseModal,
    onCreateTask,
    onUpdateTask,
    onDeleteTask,
    onSearch,
    onSelectTask,
  };
};

export default useTasks;
