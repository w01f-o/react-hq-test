import { validateChildrenByComponent } from '@/shared/lib';
import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { ButtonGroupItem } from './ButtonGroupItem';

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  ...props
}) => {
  validateChildrenByComponent(children, ButtonGroupItem);

  return (
    <div className={clsx('flex gap-1 min-[410px]:gap-2', className)} {...props}>
      {children}
    </div>
  );
};
