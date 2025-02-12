import clsx from 'clsx';
import { FC } from 'react';

const spanPosition: Record<number, string> = {
  0: 'top-0',
  1: 'top-1/2 -translate-y-1/2',
  2: 'bottom-0',
};

export const BurgerButton: FC = () => {
  return (
    <button className="relative h-6 w-[35px]">
      {Array.from({ length: 3 }, (_, i) => (
        <span
          key={i}
          className={clsx(
            'absolute left-0 h-0.5 w-full bg-white',
            spanPosition[i]
          )}
        ></span>
      ))}
    </button>
  );
};
