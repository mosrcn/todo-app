/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextareaHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

export interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions<any>;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const TextArea = ({
  name,
  label,
  register,
  rules,
  error = false,
  helperText,
  required = false,
  fullWidth = false,
  ...rest
}: InputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className='block mb-1 text-sm font-medium'>
          {label} {(required || rules?.required) && <span className='text-red-500'>*</span>}
        </label>
      )}
      <textarea
        className={classNames(
          'text-sm rounded-lg block p-2 border',
          error ? 'border-red-500' : 'border-gray-300',
          fullWidth && 'w-full'
        )}
        {...(register && name && register(name, rules))}
        {...rest}
      />
      {helperText && (
        <div className={classNames('mt-1 text-xs', error ? 'text-red-500' : 'text-gray-500')}>{helperText}</div>
      )}
    </div>
  );
};

export default TextArea;
