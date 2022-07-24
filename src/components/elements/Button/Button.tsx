import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  size = 'md',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        'font-medium rounded-lg text-sm px-4 py-2 text-center shadow transition',
        disabled && 'text-gray-400 bg-gray-100',
        !disabled && color === 'primary' && 'text-white bg-sky-500 hover:bg-sky-600',
        !disabled && color === 'secondary' && 'text-white bg-red-500 hover:bg-red-600',
        size === 'md' && 'scale-100',
        size === 'lg' && 'scale-110',
        size === 'sm' && 'scale-90',
        fullWidth && 'w-full'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
