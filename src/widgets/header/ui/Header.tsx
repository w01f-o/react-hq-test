import { FC } from 'react';
import { BurgerMenu } from './burger-menu';
import { RefreshButton } from './refresh-button';

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-4 pt-8 pb-6 opacity-50">
      <BurgerMenu />
      <h1>Dashboard</h1>
      <RefreshButton />
    </header>
  );
};
