import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactAddIcon } from "@shared/components/icons/user";
import { Button } from "@shared/components/ui/button";
import { SearchFilter } from "@shared/components/ui/searchFilter";
import { cn } from "shared";
import { ExportButton } from "./ExportButton";
import { FilterButton, SortButton } from "./filterButton";
import PageTitle from "./page-title";
import { PleaseWaitLoadText } from "./please-wait-load-text";

interface InvoiceHeaderProps {
  actionBtnClick?: () => void;
  isLoading?: boolean;
  addBtnText?: string;
  searchPlaceHolder?: string;
  title: string;
  hiddenFilterDropdown?: boolean;
  className?: string;
  hiddenSearch?: boolean;
  hiddenAddButton?: boolean;
  hiddenSort?: boolean;
  hiddenExport?: boolean;
}

export const InvoiceHeader = ({
  actionBtnClick,
  isLoading,
  addBtnText,
  searchPlaceHolder,
  title = '',
  hiddenFilterDropdown,
  className,
  hiddenSearch,
  hiddenAddButton,
  hiddenExport,
  hiddenSort
}: InvoiceHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between px-6 max-h-full min-h-20 bg-white', className)}>
      {/* Title */}
     {/* <Button><Back/></Button> */}
      <PageTitle title={title} />

      {/* Actions */}
      <div className="flex items-center">
        <div className="w-full flex space-between">
        {/* Search */}
               <div>
                <Button variant={'outline'}>Clarify</Button>
               </div>

<div>
            <Button variant={'outline'}>Skip</Button>
        <Button>Save</Button>

         <div className="border border-gray-200 rounded-md">
            <SortButton />
          </div>
</div>
      </div>
      </div>
    </div>
  );
};
