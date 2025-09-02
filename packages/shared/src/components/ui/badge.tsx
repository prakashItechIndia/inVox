import React from 'react';
import { cn } from '../../lib';

interface BadgeWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  badgePosition?: string; // tailwind classes for positioning
  children: React.ReactNode;
}

export const BadgeWrapper = ({
  children,
  badgePosition = 'bottom-0 right-0',
  className,
  ...props
}: BadgeWrapperProps) => {
  return (
    <div className={cn('relative inline-block', className)} {...props}>
      {children}
      <div className={cn('absolute', badgePosition)}>
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
    </div>
  );
};
