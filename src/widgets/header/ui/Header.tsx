import { Heading } from '@/shared/ui';
import { FC } from 'react';
import { BurgerMenu } from './burger-menu';
import { ReloadButton } from './reload-button';

export const Header: FC = () => {
  return (
    <header className="flex justify-between">
      <BurgerMenu />
      <Heading tag="h1">Dashboard</Heading>
      <ReloadButton />
    </header>
  );
};
