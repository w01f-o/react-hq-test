import { FC, SVGProps } from 'react';

type HCoinIconProps = SVGProps<SVGSVGElement>;

export const HCoinIcon: FC<HCoinIconProps> = ({ ...props }) => {
  return (
    <svg
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11" cy="11" r="10.2" stroke="#fff" strokeWidth="1.6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18.765a7.765 7.765 0 1 0 0-15.53 7.765 7.765 0 0 0 0 15.53ZM9.748 7.744H8.662v6.512h1.086v-2.588h2.504v2.588h1.086V7.743h-1.086v2.84H9.748v-2.84Z"
        fill="#fff"
      />
    </svg>
  );
};
