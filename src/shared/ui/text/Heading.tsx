import { FC, ReactNode } from 'react';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ tag: Tag, children }) => {
  return <Tag>{children}</Tag>;
};
