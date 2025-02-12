import { Children, isValidElement, ReactNode } from 'react';

export const validateChildrenByComponent = (
  children: ReactNode,
  allowedComponent: React.ElementType
): void | never => {
  Children.toArray(children).forEach(child => {
    if (isValidElement(child) && child.type !== allowedComponent) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        `Invalid children, allowed only ${allowedComponent.name}`
      );
    }
  });
};
