import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Button.module.scss';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
   ({ children, className, ...props }, ref) => {
      const isLink = 'href' in props;
      const Component = (isLink ? 'a' : 'button') as React.ElementType;
      return (
         <Component ref={ref} className={clsx(styles['button'], className)} {...props}>
            {children}
         </Component>
      );
   },
);

Button.displayName = 'Button';
