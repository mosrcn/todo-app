import { createElement, ReactNode } from 'react';
import { DeepPartial, FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export interface FormProps<T extends FieldValues> {
  defaultValues?: DeepPartial<T>;
  onSubmit: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
  children: ReactNode;
}

const Form = <T extends FieldValues>({ defaultValues, children, onSubmit, onInvalid }: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({ defaultValues });

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit, onInvalid)}>
      {Array.isArray(children)
        ? children.map((child) =>
            child.props.name
              ? createElement(child.type, {
                  ...child.props,
                  key: child.props.name,
                  register,
                  error: child.props.error || !!errors[child.props.name],
                  helperText: errors[child.props.name]?.message || child.props.helperText,
                })
              : child
          )
        : children}
    </form>
  );
};

export default Form;
