import * as React from 'react';
import { ChevronRight } from 'lucide-react'; // Or use your own icon
import { cn } from '../../lib/utils'; // Adjust the path as needed

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separatorIcon?: React.ReactNode;
} 

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separatorIcon = <ChevronRight className="w-4 h-4 text-gray-400" />, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('flex items-center text-sm text-gray-600 h-14 p-6', className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="inline-flex items-center space-x-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="inline-flex items-center">
                {!isLast && (
                  <>
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                    <span className="mx-1">{separatorIcon}</span>
                  </>
                )}

                {isLast && (
                  <span
                    className="text-gray-900 font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
