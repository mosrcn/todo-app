/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions<any>;
  error?: boolean;
  helperText?: string;
}

const CheckBox = ({ name, label, register, rules, error, helperText, ...rest }: CheckBoxProps) => {
  return (
    <div className='flex items-start'>
      <div className='flex items-center h-5'>
        <input type='checkbox' className='w-4 h-4' {...(register && name && register(name, rules))} {...rest} />
      </div>
      {label && (
        <label htmlFor={name} className='ml-2 text-sm font-medium'>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
