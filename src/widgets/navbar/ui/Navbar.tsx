import { appRoutes, RoutePaths } from '@/shared/router';
import { Button } from '@/shared/ui';
import clsx from 'clsx';
import {
  Activity,
  Bitcoin,
  ChartNoAxesCombined,
  List,
  ShoppingCart,
} from 'lucide-react';
import { FC, ReactNode, useState } from 'react';

const icons: Record<RoutePaths, ReactNode> = {
  '/': <List />,
  '/market': <ChartNoAxesCombined />,
  '/megabot': <ShoppingCart />,
  '/prices': <Bitcoin />,
  '/profile': <Activity />,
};

export const Navbar: FC = () => {
  const [activeLink, setActiveLink] = useState<RoutePaths>(
    RoutePaths.DASHBOARD
  );

  const clickHandler = (path: RoutePaths) => (): void => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-blue-light-secondary">
      <ul className="flex">
        {appRoutes.map(({ path, title }) => (
          <li key={path} className="flex-grow">
            <Button
              variant="light"
              className={clsx(
                'flex w-full flex-col items-center gap-1 pt-3 pb-2 text-sm',
                {
                  'opacity-50': activeLink !== path,
                }
              )}
              title={title}
              onClick={clickHandler(path)}
            >
              {icons[path]}
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
