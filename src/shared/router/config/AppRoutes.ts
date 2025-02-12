import { AppRoute } from '../model';
import { RoutePaths } from '../model/RoutePaths.enum';

export const appRoutes: AppRoute[] = [
  { path: RoutePaths.DASHBOARD, title: 'Dashboard' },
  { path: RoutePaths.MEGABOT, title: 'Megabot' },
  { path: RoutePaths.MARKET, title: 'Bot market' },
  { path: RoutePaths.PRICES, title: 'Coin prices' },
  { path: RoutePaths.PROFILE, title: 'Profile' },
];
