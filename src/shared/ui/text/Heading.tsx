import { FC, HTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ tag: Tag, children, ...props }) => {
  return <Tag {...props}>{children}</Tag>;
};
