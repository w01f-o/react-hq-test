import { FC } from 'react';

interface BotIconProps {
  name: string;
}

export const BotIcon: FC<BotIconProps> = ({ name }) => {
  return {
    orange_bot: (
      <svg
        width="62"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.041 47.777v-6.882h-6.958v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882H6.332v6.882H0V20.25h6.332v-6.882h6.959V6.485h6.958V.223h6.959v6.262h6.958V.223h6.959v6.262h6.958v6.882h6.959v6.882H62v27.528h-6.959ZM27.209 20.25H13.29v6.882h13.917V20.25Zm6.958 0v6.882h13.917V20.25H34.166Z"
          fill="#F96400"
        />
      </svg>
    ),
    blue_bot: (
      <svg
        width="62"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.041 47.777v-6.882h-6.958v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882H6.332v6.882H0V20.25h6.332v-6.882h6.959V6.485h6.958V.223h6.959v6.262h6.958V.223h6.959v6.262h6.958v6.882h6.959v6.882H62v27.528h-6.959ZM27.209 20.25H13.29v6.882h13.917V20.25Zm6.958 0v6.882h13.917V20.25H34.166Z"
          fill="#4794C4"
        />
      </svg>
    ),
    green_bot: (
      <svg
        width="62"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.041 47.777v-6.882h-6.958v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882H6.332v6.882H0V20.25h6.332v-6.882h6.959V6.485h6.958V.223h6.959v6.262h6.958V.223h6.959v6.262h6.958v6.882h6.959v6.882H62v27.528h-6.959ZM27.209 20.25H13.29v6.882h13.917V20.25Zm6.958 0v6.882h13.917V20.25H34.166Z"
          fill="#78A659"
        />
      </svg>
    ),
    yellow_bot: (
      <svg
        width="62"
        height="62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.041 48.083V34.166h-6.958v13.917h-6.958v6.959h6.958V62H34.166V48.083h-6.958V62H13.29v-6.959h6.958v-6.958h-6.958V34.166H6.332v13.917H0V27.208h6.332v-6.959h6.959v-6.958h6.958V6.332h6.959v6.959h6.958V6.332h6.959v6.959h6.958v6.958h6.959v6.959H62v20.875h-6.959ZM27.209 20.25h-6.959v6.959h6.959v-6.959Zm13.917 0h-6.959v6.959h6.959v-6.959ZM13.29 0h6.958v6.332h-6.958V0Zm34.792 0v6.332h-6.958V0h6.958Z"
            fill="#FEDA32"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h62v62H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    red_bot: (
      <svg
        width="62"
        height="48"
        viewBox="0 0 62 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.0415 47.7773V40.8953H48.0831V47.7773H41.1246V40.8953H34.1661V47.7773H27.2076V40.8953H20.2492V47.7773H13.2907V40.8953H6.33221V47.7773H0V40.8953V20.2493H6.33221V13.3673H13.2907V6.48528H20.2492V0.222656H27.2076V6.48528H34.1661V0.222656H41.1246V6.48528H48.0831V13.3673H55.0415V20.2493H62V40.8953V47.7773H55.0415ZM27.2076 20.2493H13.2907V27.1313H27.2076V20.2493ZM34.1661 20.2493V27.1313H48.0831V20.2493H34.1661Z"
          fill="#F11D0D"
        />
      </svg>
    ),
    white_bot: (
      <svg
        width="62"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.041 47.777v-6.882h-6.958v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882h-6.959v6.882h-6.958v-6.882H6.332v6.882H0V20.25h6.332v-6.882h6.959V6.485h6.958V.223h6.959v6.262h6.958V.223h6.959v6.262h6.958v6.882h6.959v6.882H62v27.528h-6.959ZM27.209 20.25H13.29v6.882h13.917V20.25Zm6.958 0v6.882h13.917V20.25H34.166Z"
          fill="#fff"
        />
      </svg>
    ),
  }[name];
};
