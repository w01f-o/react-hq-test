import { FC, SVGProps } from 'react';

type HCoinIconProps = SVGProps<SVGSVGElement>;

export const HCoinIcon: FC<HCoinIconProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10" cy="10" r="9.2" stroke="#fff" strokeWidth="1.6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.059A7.059 7.059 0 1 0 10 2.94a7.059 7.059 0 0 0 0 14.118ZM8.861 7.039h-.986V12.96h.986v-2.353h2.277v2.353h.987V7.04h-.986v2.58H8.86V7.04Z"
        fill="#fff"
      />
    </svg>
  );
};
