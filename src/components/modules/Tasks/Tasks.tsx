import Button from '@/components/elements/Button';
import CheckBox from '@/components/elements/CheckBox';
import Form from '@/components/elements/Form';
import Input from '@/components/elements/Input';
import Modal from '@/components/elements/Modal';
import Search from '@/components/elements/Search';
import TextArea from '@/components/elements/TextArea';
import TaskCard from './TaskCard';
import useTasks from './useTasks';

const Tasks = () => {
  const {
    openModal,
    tasks,
    selectedTask,
    onSelectTask,
    onOpenModal,
    onCloseModal,
    onCreateTask,
    onUpdateTask,
    onDeleteTask,
    onSearch,
  } = useTasks();

  return (
    <>
      <div className='flex flex-wrap gap-4 justify-between'>
        <Button onClick={onOpenModal}>Create Task</Button>
        <Search onChange={onSearch} />
      </div>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {tasks.map((task, index) => (
          <TaskCard key={index} data={task} onSelect={onSelectTask} onDelete={onDeleteTask} />
        ))}
      </div>

      <Modal open={openModal} onClose={onCloseModal}>
        <h3 className='mb-4 text-xl font-medium'>{selectedTask ? 'Update task' : 'Create Task'}</h3>
        <Form
          onSubmit={selectedTask ? onUpdateTask(selectedTask.id) : onCreateTask}
          defaultValues={selectedTask === null ? undefined : selectedTask}
        >
          <Input
            label='Title'
            name='title'
            placeholder='Add title here'
            rules={{
              required: {
                value: true,
                message: 'Title is required.',
              },
            }}
            fullWidth
          />
          <TextArea
            label='Description'
            name='description'
            placeholder='Add description here'
            rules={{
              required: {
                value: true,
                message: 'Description is required.',
              },
            }}
            fullWidth
          />
          <CheckBox label='Is Completed?' name='isCompleted' />
          <div className='flex justify-end space-x-2 item'>
            <Button color='secondary' onClick={onCloseModal}>
              Cancel
            </Button>
            <Button color='primary' type='submit'>
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Tasks;
