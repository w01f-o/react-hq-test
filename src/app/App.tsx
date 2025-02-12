import { HomePage } from '@/pages/home';
import { Layout } from '@/shared/ui';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};
