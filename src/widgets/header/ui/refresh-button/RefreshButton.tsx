import { Button } from '@/shared/ui';
import { RefreshCcw } from 'lucide-react';
import { FC } from 'react';

export const RefreshButton: FC = () => {
  return (
    <Button title="Refresh" aria-label="Refresh" variant="light">
      <RefreshCcw
        className="-scale-x-100"
        width={24}
        height={24}
        strokeWidth={1}
      />
    </Button>
  );
};
