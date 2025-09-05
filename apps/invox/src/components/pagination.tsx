"use client";

import { Button } from "@shared/components/ui/button";
import { SearchFilter } from "@shared/components/ui/searchFilter";
import { useMemo } from "react";
import { cn } from "shared";
import { CustomSelect } from "./custom-select";

interface CompactPaginationToolbarProps {
  itemsPerPage: number;
  onPageSizeChange: (size: number) => void;
  onSearchChange: (query: string) => void;
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function CompactPaginationToolbar({
  itemsPerPage,
  onPageSizeChange,
  onSearchChange,
  currentPage,
  pageCount,
  onPageChange,
}: CompactPaginationToolbarProps) {
  const pageSizeOptions = useMemo(
    () =>
      [10, 20, 50, 100].map((size) => ({
        value: String(size),
        label: String(size),
      })),
    []
  );

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pageCount) onPageChange(currentPage + 1);
  };

  const buttonBaseClasses =
    "bg-white !border-1 !border-[#E0E0E0] rounded-lg p-2 text-[1.6rem]";

  return (
    <div className="flex items-center justify-between px-4">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-sm">
        <SearchFilter
          searchPlaceHolder="Search"
          onChange={(e) => onSearchChange(e)}
          className="w-full border-none"
        />
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2 ml-4">
        <PaginationNavButton
          disabled={currentPage === 1}
          onClick={handlePrev}
          label="&lsaquo;"
          className={buttonBaseClasses}
        />
        <PaginationNavButton
          disabled={currentPage === pageCount}
          onClick={handleNext}
          label="&rsaquo;"
          className={buttonBaseClasses}
        />

        {/* Items Per Page Selector */}
        <CustomSelect
          onValueChange={(e) => onPageSizeChange(Number(e))}
          value={`${itemsPerPage}`}
          className="w-16 rounded-lg border px-2"
          options={pageSizeOptions}
        />
      </div>
    </div>
  );
}

interface PaginationNavButtonProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
  className?: string;
}

function PaginationNavButton({
  onClick,
  disabled,
  label,
  className,
}: PaginationNavButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      disabled={disabled}
      className={cn(className, {
        "opacity-50 cursor-not-allowed bg-[#F0F0F0]": disabled,
      })}
    >
      {label}
    </Button>
  );
}
