import * as React from 'react';

import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconClassName, ...props }, ref) => {
    return (
      <div className={cn('relative', className)}>
        {icon && icon}
        <input
          type={type}
          className={cn(
            'border-input bg-background ring-offset-background focus-visible:ring-ring placeholder:text-tableHeaderTextColor flex h-10 w-full rounded-md border px-3 py-2 text-md file:border-0 file:bg-transparent file:text-md file:font-medium placeholder:text-md placeholder:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
            icon ? (iconClassName ? iconClassName : 'pl-10') : '',
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
