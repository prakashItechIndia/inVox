import { ArrowDownIcon, ArrowUpIcon } from '@shared/components/icons/invoice';
import { ReactExportIcon } from '@shared/components/icons/user';
import { Button, buttonVariants } from '@shared/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@shared/components/ui/popover';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { VariantProps } from 'class-variance-authority';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  enableExportClick?: boolean; // Optional prop to enable export button click
}
export const ExportButton = (props: ButtonProps) => {
  const { t } = useLanguageTranslation();
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const exportLoansReports = () => {
    closeRef.current?.click();
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild ref={closeRef}>
        <Button
          type="button"
          {...props}
          {...(!props.onClick && props?.enableExportClick
            ? { onClick: exportLoansReports }
            : {})}
        >
          <ReactExportIcon className="text-highlight" />
          {t('COMMON.EXPORT')}
          {open ? <ArrowUpIcon /> : <ArrowDownIcon />}

        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full" align="start">
        <div className="flex flex-col w-full">
          CSV
        </div>
      </PopoverContent>
    </Popover>
  );
};
