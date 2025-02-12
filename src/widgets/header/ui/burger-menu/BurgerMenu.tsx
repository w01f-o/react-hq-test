import { FC } from 'react';

export const BurgerMenu: FC = () => {
  return (
    <div>
      <button>
        {Array.from({ length: 3 }, (_, i) => (
          <span key={i}></span>
        ))}
      </button>
    </div>
  );
};
