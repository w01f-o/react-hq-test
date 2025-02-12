import { Heading } from '@/shared/ui';
import { FC } from 'react';
import { BurgerMenu } from './burger-menu';
import { RefreshButton } from './refresh-button';

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-12 opacity-50">
      <BurgerMenu />
      <Heading tag="h1">Dashboard</Heading>
      <RefreshButton />
    </header>
  );
};
