import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonGroupItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
}

export const ButtonGroupItem: FC<ButtonGroupItemProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'w-18 rounded-full border-1 py-1.5 font-semibold transition-opacity',
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
