import { botColors } from '@/shared/config';
import { FC } from 'react';

interface BotIconProps {
  name: string;
}

export const BotIcon: FC<BotIconProps> = ({ name }) => {
  if (name === 'yellow_bot') {
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.3883 38.7767V27.5533H38.7767V38.7767H33.165V44.3883H38.7767V50H33.165H27.5533V38.7767H21.9416V50H16.33H10.7183V44.3883H16.33V38.7767H10.7183V27.5533H5.10662V33.165V38.7767H0V33.165V27.5533V21.9416H5.10662V16.33H10.7183V10.7183H16.33V5.10662H21.9416V10.7183H27.5533V5.10662H33.165V10.7183H38.7767V16.33H44.3883V21.9416H50V27.5533V38.7767H44.3883ZM21.9416 16.33H16.33V21.9416H21.9416V16.33ZM33.165 16.33H27.5533V21.9416H33.165V16.33ZM10.7183 0H16.33V5.10662H10.7183V0ZM38.7767 0V5.10662H33.165V0H38.7767Z"
          fill={botColors.yellow_bot}
        />
      </svg>
    );
  }

  return (
    <svg width="50" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.388 38v-5.5h-5.611V38h-5.612v-5.5h-5.612V38h-5.611v-5.5H16.33V38h-5.612v-5.5H5.107V38H0V16.003h5.107v-5.5h5.611V5.005h5.612V0h5.612v5.004h5.611V0h5.612v5.004h5.612v5.5h5.611v5.499H50V38h-5.612ZM21.942 16.003H10.718v5.5h11.224v-5.5Zm5.611 0v5.5h11.224v-5.5H27.553Z"
        fill={botColors[name]}
      />
    </svg>
  );
};
