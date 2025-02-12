import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { FC, PropsWithChildren } from 'react';
import { BlurredSpot } from './BlurredSpot';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <BlurredSpot />
      <Header />
      {children}
      <Navbar />
    </>
  );
};
