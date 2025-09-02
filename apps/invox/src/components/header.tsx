import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactAddIcon } from "@shared/components/icons/user";
import { Button } from "@shared/components/ui/button";
import { SearchFilter } from "@shared/components/ui/searchFilter";
import { cn } from "shared";
import { FilterButton, SortButton } from "./filterButton";
import PageTitle from "./page-title";
import { PleaseWaitLoadText } from "./please-wait-load-text";
import { ExportButton } from "./ExportButton";

interface HeaderProps {
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

export const Header = ({
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
}: HeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between px-6 bg-[var(--background)] max-h-full min-h-20', className)}>
      {/* Title */}
      <PageTitle title={title} />

      {/* Actions */}
      <div className="flex items-center space-x-3">
        {/* Search */}
        {!hiddenSearch && <SearchFilter
          searchPlaceHolder={searchPlaceHolder} />}

        {/* Filter Dropdown */}
        {!hiddenFilterDropdown && <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <span>
              <FilterButton />
            </span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[150px] bg-white shadow-lg rounded-md border border-gray-200 p-2 z-50"
              sideOffset={5}
            >
              <DropdownMenu.Item className="text-sm px-3 py-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                Active Users
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-sm px-3 py-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                Inactive Users
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>}
        {/* Sort Button */}

        {!hiddenSort && (
          <div className="border border-gray-200 rounded-md">
            <SortButton />
          </div>
        )}

        {!hiddenExport && (
          <ExportButton
            variant="outline"
            className="border border-gray-200 rounded-md"
          />
        )}

        {/* Add User Button */}
        {!hiddenAddButton && <Button
          variant="highlight"
          size="default"
          onClick={() => {
            actionBtnClick && actionBtnClick();
          }}
          className="flex items-center"
        >
          {!isLoading && <ReactAddIcon className="mr-2 w-4 h-4" />}
          {!isLoading ? addBtnText : <PleaseWaitLoadText />}
        </Button>}
      </div>
    </div>
  );
};
