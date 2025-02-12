import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { FC } from 'react';

const spanPosition: Record<number, string> = {
  0: 'top-0',
  1: 'top-1/2 -translate-y-1/2',
  2: 'bottom-0',
};

export const BurgerButton: FC = () => {
  return (
    <Button
      className="relative h-6 w-[35px]"
      title="Menu"
      aria-label="Open menu"
      variant="light"
    >
      {Array.from({ length: 3 }, (_, i) => (
        <span
          key={i}
          className={clsx(
            'absolute left-0 h-0.5 w-full bg-white',
            spanPosition[i]
          )}
        ></span>
      ))}
    </Button>
  );
};
