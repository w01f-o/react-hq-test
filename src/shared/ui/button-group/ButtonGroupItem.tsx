import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonGroupItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

export const ButtonGroupItem: FC<ButtonGroupItemProps> = ({
  children,
  className,
  isActive,
  rounded,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'w-18 border-1 py-1.5 text-sm font-semibold transition-opacity',
        `rounded-${rounded ?? 'full'}`,
        className,
        {
          'opacity-30': !isActive,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
