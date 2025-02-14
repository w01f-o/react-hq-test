import { Children, isValidElement, ReactNode } from 'react';

export const validateChildrenByComponent = (
  children: ReactNode,
  allowedComponent: React.ElementType
): void | never => {
  Children.toArray(children).forEach(child => {
    if (isValidElement(child) && child.type !== allowedComponent) {
      const componentName =
        typeof allowedComponent === 'string'
          ? allowedComponent
          : allowedComponent.name || allowedComponent.displayName;

      throw new Error(`Invalid children, allowed only ${componentName}`);
    }
  });
};
