import { RefreshCcw } from 'lucide-react';
import { FC } from 'react';

export const RefreshButton: FC = () => {
  return (
    <button>
      <RefreshCcw
        className="-scale-x-100"
        width={35}
        height={35}
        strokeWidth={1}
      />
    </button>
  );
};
