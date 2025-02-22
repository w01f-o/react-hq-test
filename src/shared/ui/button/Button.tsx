import clsx from 'clsx';
import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'light';
}

const classNames: Record<ButtonProps['variant'], string> = {
  light:
    'before:bg-white before:absolute before:opacity-0 hover:before:opacity-20 before:size-full before:left-1/2 before:top-1/2 before:-translate-1/2 before:p-5 before:rounded-md transition-opacity before:transition-opacity active:before:opacity-25',
};

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, variant, ...props }, ref) => (
  <button
    className={clsx('relative', classNames[variant], className)}
    {...props}
    ref={ref}
  >
    {children}
  </button>
));

Button.displayName = 'Button';
