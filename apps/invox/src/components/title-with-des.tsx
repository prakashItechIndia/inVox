'use client';

import * as React from 'react';
import { cn } from 'shared'; // If using utility for classNames

interface SectionHeaderWithDescriptionProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const SectionHeaderWithDescription: React.FC<SectionHeaderWithDescriptionProps> = ({
  title,
  description,
  className,
  titleClassName = 'font-semibold text-md text-gray-900',
  descriptionClassName = 'text-md text-gray-500'
}) => {
  return (
    <div className={cn('w-full', className)}>
      <div className={cn(titleClassName)}>
        {title}
      </div>
      {description && (
        <div className={cn(descriptionClassName)}>{description}</div>
      )}
    </div>
  );
};
