import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonGroupItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isUnActive?: boolean;
}

export const ButtonGroupItem: FC<ButtonGroupItemProps> = ({
  children,
  className,
  isUnActive,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'w-16 rounded-full border-1 py-1.5 text-xs font-semibold transition-opacity min-[410px]:w-18 min-[410px]:text-[16px] [:disabled]:opacity-30',
        className,
        {
          'opacity-30': isUnActive,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
