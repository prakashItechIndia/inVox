import { styles } from '@/styles/style';
import { ReactExportIcon } from '@shared/components/icons/user';
import { Button, buttonVariants } from '@shared/components/ui/button';
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
  const [isExportOpen, setIsExportOpen] = React.useState<boolean>(false);

  const exportLoansReports = () => {
    setIsExportOpen(true);
  }
  return (
    <>
      <Button
        className={styles.filterButton}
        type="button"
        {...props}
        {...(!props.onClick && props?.enableExportClick
          ? { onClick: exportLoansReports }
          : {})}
      >
        <ReactExportIcon className="text-highlight" />
        {t('COMMON.EXPORT')}
      </Button>
    </>
  );
};
