import classNames from 'classnames';

import { ITask } from '@/types/tasks.type';
import dayjs from '@/utils/dayjs';

export type TaskCardProps = {
  data: ITask;
  onSelect?: (data: ITask) => void;
  onDelete?: (id: string) => void;
};

const TaskCard = ({ data, onSelect, onDelete }: TaskCardProps) => {
  return (
    <div
      className={classNames(
        'w-full h-auto rounded-lg shadow',
        data.isCompleted ? 'bg-gray-50' : 'bg-white cursor-pointer'
      )}
      onClick={data.isCompleted ? () => null : () => onSelect?.(data)}
    >
      <div className='flex items-start justify-between p-4 border-b'>
        <div className='text-ellipsis overflow-hidden'>
          <span
            className={classNames('block text-base text-ellipsis overflow-hidden', data.isCompleted && 'line-through')}
          >
            {data.title}
          </span>
          <span className='block text-xs text-gray-400'>
            Last modified {dayjs(data.updatedAt).format('DD MMMM YYYY H:mm')}
          </span>
        </div>
        {data.isCompleted ? (
          <div className='rounded-full bg-green-500 text-white p-1'>
            <svg className='w-4 h-4' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z' />
            </svg>
          </div>
        ) : (
          <button
            type='button'
            className='text-red-500 bg-transparent hover:bg-gray-100 hover:text-red-600 rounded-lg text-sm p-2 transition'
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(data.id);
            }}
          >
            <svg className='w-4 h-4' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z' />
            </svg>
          </button>
        )}
      </div>
      <div className='p-4'>
        <span className='block text-xs whitespace-pre-line break-words'>{data.description}</span>
      </div>
    </div>
  );
};

export default TaskCard;
